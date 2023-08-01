import { registerPlugin } from '@capacitor/core';
const WebViewCache = registerPlugin('WebViewCache', {
    web: () => import('./web').then(m => new m.WebViewCacheWeb()),
});
export * from './definitions';
export { WebViewCache };
//# sourceMappingURL=index.js.map