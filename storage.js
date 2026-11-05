(() => {
    'use strict';

    const databaseName = 'lernraum9';
    const storeName = 'keyValue';
    const legacyKeys = ['chemieLernState', 'mathematikLearningState'];

    function openDatabase() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(databaseName, 1);
            request.onupgradeneeded = () => {
                request.result.createObjectStore(storeName, { keyPath: 'key' });
            };
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error || new Error('Die IndexedDB konnte nicht geöffnet werden.'));
        });
    }

    const databaseReady = openDatabase().then(async database => {
        for (const key of legacyKeys) {
            let rawValue;
            try {
                rawValue = localStorage.getItem(key);
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
                localStorage.removeItem(key);
            } catch (error) {
                console.warn(`Der alte Lernstand "${key}" konnte nach der Übernahme nicht aus dem LocalStorage entfernt werden:`, error);
            }
        }
        return database;
    });

    function transactionRequest(database, mode, action) {
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

    window.LernraumDB = {
        async get(key) {
            const database = await databaseReady;
            return new Promise((resolve, reject) => {
                const request = database.transaction(storeName, 'readonly').objectStore(storeName).get(key);
                request.onsuccess = () => resolve(request.result ? request.result.value : null);
                request.onerror = () => reject(request.error || new Error(`Der Lernstand "${key}" konnte nicht gelesen werden.`));
            });
        },
        async set(key, value) {
            const database = await databaseReady;
            await transactionRequest(database, 'readwrite', store => store.put({ key, value }));
        },
        async update(key, updater) {
            const database = await databaseReady;
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
    };
})();
