'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

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
//# sourceMappingURL=plugin.cjs.js.map
