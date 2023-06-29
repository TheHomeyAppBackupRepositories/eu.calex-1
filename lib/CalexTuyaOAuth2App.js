'use strict';

const { TuyaOAuth2App } = require('homey-oauth2app-tuya');

module.exports = class CalexTuyaOAuth2App extends TuyaOAuth2App {

  static OAUTH2_DEBUG = true;
  static OAUTH2_TUYA_PROXY_BRAND = 'calex';

};
