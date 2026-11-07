(() => {
    const isLocalhost = ['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname);
    if (!('serviceWorker' in navigator)
        || (window.location.protocol !== 'https:' && !isLocalhost)) return;

    let registration;
    let waitingWorker;
    let updateRequested = false;
    let updateNotice;
    let updateButton;
    let reloadScheduled = false;
    const hadController = Boolean(navigator.serviceWorker?.controller);

    function scheduleReload() {
        if (reloadScheduled) return;
        reloadScheduled = true;
        window.setTimeout(() => {
            if (!document.hidden) {
                window.location.reload();
                return;
            }

            const onVisible = () => {
                window.location.reload();
                document.removeEventListener('visibilitychange', onVisible);
            };
            document.addEventListener('visibilitychange', onVisible, { once: true });
        }, 1200);
    }

    function showUpdateNotice(message, buttonLabel, onClick) {
        if (!updateNotice) {
            updateNotice = document.createElement('div');
            updateNotice.className = 'pwa-update-notice';
            updateNotice.setAttribute('role', 'status');
            updateNotice.setAttribute('aria-live', 'polite');
            updateNotice.innerHTML = '<span class="pwa-update-message"></span><button class="btn" type="button"></button>';
            document.body.appendChild(updateNotice);
            updateButton = updateNotice.querySelector('button');
        }

        updateNotice.querySelector('.pwa-update-message').textContent = message;
        updateButton.textContent = buttonLabel;
        updateButton.disabled = false;
        updateButton.onclick = onClick;
        updateNotice.classList.add('visible');
    }

    function requestUpdate() {
        waitingWorker = registration?.waiting || waitingWorker;
        if (!waitingWorker) {
            scheduleReload();
            return;
        }

        updateRequested = true;
        if (updateButton) {
            updateButton.disabled = true;
            updateButton.textContent = 'Wird aktualisiert …';
        }
        waitingWorker.postMessage({ type: 'SKIP_WAITING' });
        scheduleReload();
    }

    function handleControllerChange() {
        if (!hadController) return;

        if (updateRequested || waitingWorker) {
            scheduleReload();
            return;
        }

        showUpdateNotice(
            'Eine neue Version ist bereit.',
            'Jetzt neu laden',
            () => window.location.reload()
        );
    }

    function checkForUpdates() {
        if (registration && navigator.onLine) {
            registration.update().catch(error => {
                console.warn('Die Suche nach einer Lernraum-Aktualisierung ist fehlgeschlagen:', error);
            });
        }
    }

    async function registerAppWorker() {
        try {
            registration = await navigator.serviceWorker.register('./service-worker.js', {
                updateViaCache: 'none'
            });

            if (registration.waiting && navigator.serviceWorker.controller) {
                waitingWorker = registration.waiting;
                requestUpdate();
            }

            registration.addEventListener('updatefound', () => {
                const installingWorker = registration.installing;
                if (!installingWorker) return;

                installingWorker.addEventListener('statechange', () => {
                    if (installingWorker.state === 'installed'
                        && registration.waiting
                        && navigator.serviceWorker.controller) {
                        waitingWorker = registration.waiting;
                        requestUpdate();
                    }
                });
            });

            navigator.serviceWorker.addEventListener('controllerchange', handleControllerChange);
            checkForUpdates();
        } catch (error) {
            console.warn('Offline-Unterstützung konnte nicht aktiviert werden:', error);
        }
    }

    window.addEventListener('load', registerAppWorker, { once: true });
    window.addEventListener('focus', checkForUpdates);
    window.addEventListener('online', checkForUpdates);
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') checkForUpdates();
    });
    window.setInterval(() => {
        if (document.visibilityState === 'visible') checkForUpdates();
    }, 60 * 60 * 1000);
})();
