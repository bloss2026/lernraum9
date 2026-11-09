(() => {
    'use strict';

    function calculateSlope(firstPoint, secondPoint) {
        const values = [firstPoint?.x, firstPoint?.y, secondPoint?.x, secondPoint?.y];
        if (values.some(value => !Number.isFinite(value))) {
            throw new TypeError('Für die Steigungsberechnung werden vier endliche Koordinaten benötigt.');
        }
        const changeX = secondPoint.x - firstPoint.x;
        if (changeX === 0) {
            throw new RangeError('Die Steigung einer senkrechten Geraden ist nicht definiert.');
        }
        return (secondPoint.y - firstPoint.y) / changeX;
    }

    window.LernraumMath = Object.freeze({ calculateSlope });
})();
