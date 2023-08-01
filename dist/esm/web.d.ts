import { WebPlugin } from '@capacitor/core';
import type { WebViewCachePlugin } from './definitions';
export declare class WebViewCacheWeb extends WebPlugin implements WebViewCachePlugin {
    clearCache(): Promise<void>;
}
