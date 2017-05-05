'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Utils = {
  localeToLang: function localeToLang(locale) {
    return 'zh-TW' === locale ? 'zh_Hant' : locale;
  }
};

exports.default = Utils;