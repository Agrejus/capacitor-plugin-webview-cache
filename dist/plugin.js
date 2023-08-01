var WebViewCachePlugin = (function (exports, core) {
    'use strict';

    const WebViewCache = core.registerPlugin('WebViewCache', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.WebViewCacheWeb()),
    });

    class WebViewCacheWeb extends core.WebPlugin {
        async clearCache() {
            console.log('I AM NOT WORKING');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        WebViewCacheWeb: WebViewCacheWeb
    });

    exports.WebViewCache = WebViewCache;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
