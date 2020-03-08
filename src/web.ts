import { WebPlugin } from '@capacitor/core';
import { CapacitorFirebaseAnalyticsPlugin } from './definitions';
import { registerWebPlugin } from '@capacitor/core';

import firebase from "firebase/app";

const analytics = firebase.analytics();
export class CapacitorFirebaseAnalyticsWeb extends WebPlugin implements CapacitorFirebaseAnalyticsPlugin {
  constructor() {
    super({
      name: 'CapacitorFirebaseAnalytics',
      platforms: ['web']
    });
  }

  async logEvent(options: { name: string, parameters: object}) {
    analytics.logEvent(options.name, options.parameters);
    return Promise.resolve();
  }

  async setUserProperty(options: { value: string, name: string}) {
    analytics.setUserProperties(options);
    return Promise.resolve();
  }

  async setUserId(options: { userId: string }) {
    analytics.setUserId(options.userId);
    return Promise.resolve();
  }

  async setScreenName(options: { screenName: string, screenClassOverride: string }) {
    analytics.setCurrentScreen(options.screenName);
    return Promise.resolve();
  }

  async appInstanceId() {
    return Promise.resolve({ appInstanceId: ''});
  }

  async resetAnalyticsData() {
    return Promise.resolve();
  }
}

const CapacitorFirebaseAnalytics = new CapacitorFirebaseAnalyticsWeb();
registerWebPlugin(CapacitorFirebaseAnalytics);
export { CapacitorFirebaseAnalytics };
