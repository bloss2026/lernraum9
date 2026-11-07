(() => {
    'use strict';

    const databaseName = 'lernraum9';
    const storeName = 'keyValue';
    const legacyKeys = ['chemieLernState', 'mathematikLearningState'];
    let cloudReady = Promise.resolve();

    function safeLocalStorage() {
        if (!('localStorage' in window)) {
            return {
                getItem() { return null; },
                setItem() {},
                removeItem() {}
            };
        }

        try {
            const storage = window.localStorage;
            const testKey = '__lernraum9_test__';
            storage.setItem(testKey, testKey);
            storage.removeItem(testKey);
            return storage;
        } catch (error) {
            return {
                getItem() { return null; },
                setItem() {},
                removeItem() {}
            };
        }
    }

    const localStorageAdapter = safeLocalStorage();

    function openDatabase() {
        if (!('indexedDB' in window)) {
            return Promise.resolve(null);
        }

        return new Promise((resolve, reject) => {
            const request = window.indexedDB.open(databaseName, 1);
            request.onupgradeneeded = () => {
                request.result.createObjectStore(storeName, { keyPath: 'key' });
            };
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error || new Error('Die IndexedDB konnte nicht geöffnet werden.'));
        });
    }

    const databaseReady = openDatabase().then(async database => {
        if (!database) return database;

        for (const key of legacyKeys) {
            let rawValue;
            try {
                rawValue = localStorageAdapter.getItem(key);
            } catch (error) {
                console.warn('Der bisherige Lernstand konnte nicht aus dem LocalStorage gelesen werden:', error);
                continue;
            }
            if (rawValue === null) continue;

            let value;
            try {
                value = JSON.parse(rawValue);
            } catch (error) {
                console.warn(`Der bisherige Lernstand "${key}" ist ungültig und wurde nicht übernommen:`, error);
                continue;
            }

            await new Promise((resolve, reject) => {
                const transaction = database.transaction(storeName, 'readwrite');
                const store = transaction.objectStore(storeName);
                const getRequest = store.get(key);
                getRequest.onsuccess = () => {
                    if (!getRequest.result) store.put({ key, value });
                };
                transaction.oncomplete = () => resolve();
                transaction.onerror = () => reject(transaction.error || new Error(`Der Lernstand "${key}" konnte nicht übernommen werden.`));
                transaction.onabort = () => reject(transaction.error || new Error(`Die Übernahme des Lernstands "${key}" wurde abgebrochen.`));
            });

            try {
                localStorageAdapter.removeItem(key);
            } catch (error) {
                console.warn(`Der alte Lernstand "${key}" konnte nach der Übernahme nicht aus dem LocalStorage entfernt werden:`, error);
            }
        }
        return database;
    });

    function transactionRequest(database, mode, action) {
        if (!database) {
            return Promise.resolve(null);
        }

        return new Promise((resolve, reject) => {
            const transaction = database.transaction(storeName, mode);
            let result;
            try {
                result = action(transaction.objectStore(storeName));
            } catch (error) {
                reject(error);
                return;
            }
            transaction.oncomplete = () => resolve(result);
            transaction.onerror = () => reject(transaction.error || new Error('Der IndexedDB-Vorgang ist fehlgeschlagen.'));
            transaction.onabort = () => reject(transaction.error || new Error('Der IndexedDB-Vorgang wurde abgebrochen.'));
        });
    }

    async function getLocal(key) {
        const database = await databaseReady;
        if (!database) {
            return JSON.parse(localStorageAdapter.getItem(key) || 'null');
        }

        return new Promise((resolve, reject) => {
            const request = database.transaction(storeName, 'readonly').objectStore(storeName).get(key);
            request.onsuccess = () => resolve(request.result ? request.result.value : null);
            request.onerror = () => reject(request.error || new Error(`Der Lernstand "${key}" konnte nicht gelesen werden.`));
        });
    }

    async function setLocal(key, value) {
        const database = await databaseReady;
        if (!database) {
            try {
                localStorageAdapter.setItem(key, JSON.stringify(value));
            } catch (error) {
                console.warn(`Der Lernstand "${key}" konnte im LocalStorage nicht gespeichert werden:`, error);
            }
            return;
        }

        await transactionRequest(database, 'readwrite', store => store.put({ key, value }));
    }

    async function updateLocal(key, updater) {
        const database = await databaseReady;
        if (!database) {
            const currentValue = (() => {
                const value = localStorageAdapter.getItem(key);
                if (value === null) return {};
                try {
                    return JSON.parse(value);
                } catch (error) {
                    return {};
                }
            })();
            const updatedValue = updater(currentValue);
            try {
                localStorageAdapter.setItem(key, JSON.stringify(updatedValue));
            } catch (error) {
                console.warn(`Der Lernstand "${key}" konnte im LocalStorage nicht aktualisiert werden:`, error);
            }
            return updatedValue;
        }

        let updatedValue;
        await new Promise((resolve, reject) => {
            const transaction = database.transaction(storeName, 'readwrite');
            const store = transaction.objectStore(storeName);
            const request = store.get(key);
            request.onsuccess = () => {
                try {
                    updatedValue = updater(request.result ? request.result.value : {});
                    store.put({ key, value: updatedValue });
                } catch (error) {
                    transaction.abort();
                    reject(error);
                }
            };
            request.onerror = () => reject(request.error || new Error(`Der Lernstand "${key}" konnte nicht aktualisiert werden.`));
            transaction.oncomplete = () => resolve();
            transaction.onerror = () => reject(transaction.error || new Error(`Der Lernstand "${key}" konnte nicht aktualisiert werden.`));
            transaction.onabort = () => reject(transaction.error || new Error(`Die Aktualisierung des Lernstands "${key}" wurde abgebrochen.`));
        });
        return updatedValue;
    }

    function queueCloudWrite(key, value) {
        if (window.LernraumCloud) {
            window.LernraumCloud.queueWrite(key, value);
        }
    }

    async function registerExercises(subjectId, exerciseIds, completedIds = []) {
        if (!subjectId || !Array.isArray(exerciseIds) || !Array.isArray(completedIds)) {
            throw new TypeError('Für den Übungsfortschritt werden ein Fach und Aufgabenlisten benötigt.');
        }

        return window.LernraumDB.update('lernraumUebungen', state => {
            const subjects = state && typeof state === 'object' && state.subjects ? state.subjects : {};
            const current = subjects[subjectId] || { available: [], completed: [] };
            const available = new Set(Array.isArray(current.available) ? current.available : []);
            const completed = new Set(Array.isArray(current.completed) ? current.completed : []);
            exerciseIds.filter(id => typeof id === 'string' && id).forEach(id => available.add(id));
            completedIds.filter(id => typeof id === 'string' && id).forEach(id => completed.add(id));

            return {
                ...state,
                subjects: {
                    ...subjects,
                    [subjectId]: { available: [...available], completed: [...completed] }
                }
            };
        });
    }

    async function recordExerciseAttempt(subjectId, exerciseId) {
        if (!subjectId || typeof exerciseId !== 'string' || !exerciseId) {
            throw new TypeError('Für den Übungsfortschritt werden ein Fach und eine Aufgaben-ID benötigt.');
        }

        return window.LernraumDB.update('lernraumUebungen', state => {
            const subjects = state && typeof state === 'object' && state.subjects ? state.subjects : {};
            const current = subjects[subjectId] || { available: [], completed: [] };
            const completed = new Set(Array.isArray(current.completed) ? current.completed : []);
            completed.add(exerciseId);
            return {
                ...state,
                subjects: {
                    ...subjects,
                    [subjectId]: {
                        ...current,
                        available: Array.isArray(current.available) ? current.available : [],
                        completed: [...completed]
                    }
                }
            };
        });
    }

    window.LernraumDB = {
        async get(key) {
            await cloudReady;
            return getLocal(key);
        },
        async set(key, value) {
            await cloudReady;
            await setLocal(key, value);
            queueCloudWrite(key, value);
        },
        async update(key, updater) {
            await cloudReady;
            const updatedValue = await updateLocal(key, updater);
            queueCloudWrite(key, updatedValue);
            return updatedValue;
        },
        getLocal,
        setLocal,
        registerExercises,
        recordExerciseAttempt,
        setCloudReady(promise) {
            cloudReady = Promise.resolve(promise);
        }
    };
})();
