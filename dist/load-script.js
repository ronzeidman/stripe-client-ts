"use strict";
/**
 * Created by ronze on 1/22/2017.
 */
function loadScript(src) {
    return new Promise(function (resolve, reject) {
        var s = document.createElement('script');
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
    });
}
exports.loadScript = loadScript;
//# sourceMappingURL=load-script.js.map