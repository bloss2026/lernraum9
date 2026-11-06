(() => {
    'use strict';

    const youtubeIdPattern = /^[A-Za-z0-9_-]{11}$/;
    const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[character]);

    window.LernraumVideoResources = Object.freeze({
        render(lesson, subject) {
            const videos = Array.isArray(lesson.videos) ? lesson.videos : [];
            const searchQuery = encodeURIComponent(`${lesson.title} ${subject} Erklärung${subject === 'Mathematik' ? ' Daniel Jung' : ''}`);
            const videoCards = videos.map((video, index) => {
                if (!youtubeIdPattern.test(video.id)) {
                    throw new Error(`Ungültige YouTube-ID für das Lernvideo "${video.title}".`);
                }
                return `
                    <article class="math-panel video-resource-card">
                        <h4>${escapeHtml(video.title)}</h4>
                        <p>${escapeHtml(video.description || '')}</p>
                        <div class="learning-video-frame" data-learning-video-frame>
                            <button class="math-button math-button-primary" type="button" data-learning-video-id="${escapeHtml(video.id)}" data-learning-video-title="${escapeHtml(video.title)}">▶ Im Lernraum abspielen</button>
                        </div>
                        <a href="https://www.youtube.com/watch?v=${encodeURIComponent(video.id)}" target="_blank" rel="noopener noreferrer">Alternativ auf YouTube öffnen ↗</a>
                        <small>${escapeHtml(video.creator || 'YouTube')} · Wird erst nach Klick geladen</small>
                    </article>`;
            }).join('');

            return `
                <section class="learning-video-section" aria-labelledby="learningVideoHeading-${escapeHtml(lesson.id)}">
                    <div>
                        <span class="math-eyebrow">VIDEO-LERNEN</span>
                        <h3 id="learningVideoHeading-${escapeHtml(lesson.id)}">Lernvideos zu „${escapeHtml(lesson.title)}“</h3>
                        <p>Öffentliche Videos werden erst nach deiner Auswahl geladen. StudyHelp bietet Lernmaterialien mit Videos an; einige Angebote können kostenpflichtig sein. <a href="https://www.studyhelp.de/" target="_blank" rel="noopener noreferrer">StudyHelp-Angebot ansehen ↗</a></p>
                    </div>
                    ${videos.length
                        ? `<div class="video-resource-grid">${videoCards}</div>`
                        : `<div class="video-resource-search">
                            <p>Für dieses Unterthema ist noch kein einzelnes Video geprüft. Hier findest du passende öffentliche Videos:</p>
                            <a class="math-button math-button-primary" href="https://www.youtube.com/results?search_query=${searchQuery}" target="_blank" rel="noopener noreferrer">▶ Lernvideos auf YouTube suchen</a>
                        </div>`}
                </section>`;
        }
    });

    document.addEventListener('click', event => {
        const button = event.target.closest('[data-learning-video-id]');
        if (!button) return;

        const videoId = button.dataset.learningVideoId;
        if (!youtubeIdPattern.test(videoId)) {
            throw new Error('Das ausgewählte Lernvideo hat eine ungültige YouTube-ID.');
        }

        const frame = button.closest('[data-learning-video-frame]');
        if (!frame) {
            throw new Error('Der Video-Playerbereich für das ausgewählte Lernvideo fehlt.');
        }

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`;
        iframe.title = button.dataset.learningVideoTitle || 'Lernvideo';
        iframe.loading = 'lazy';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;
        frame.replaceChildren(iframe);
    });
})();
