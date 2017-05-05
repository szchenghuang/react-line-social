'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var lineScript = void 0;

var Utils = {
  localeToLang: function localeToLang(locale) {
    return 'zh-TW' === locale ? 'zh_Hant' : locale;
  },
  setScript: function setScript(script) {
    if (!lineScript) {
      lineScript = script;
    }
  },
  getScript: function getScript() {
    return lineScript;
  }
};

exports.default = Utils;