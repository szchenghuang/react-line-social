'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var scriptLoaded = false;
var scriptInjected = false;
var loadButton = function loadButton() {
  window.LineIt && window.LineIt.loadButton();
};

var Utils = {
  localeToLang: function localeToLang(locale) {
    return 'zh-TW' === locale ? 'zh_Hant' : locale;
  },
  loadButtons: function loadButtons() {
    if (scriptInjected) {
      if (scriptLoaded) {
        loadButton();
      }
    } else {
      var script = document.createElement('script');
      script.src = 'https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js';
      script.type = 'text/javascript';
      script.async = true;
      script.defer = true;
      script.onerror = function (error) {
        throw error;
      };
      script.onload = function () {
        scriptLoaded = true;
        loadButton();
      };
      document.body.appendChild(script);
      scriptInjected = true;
    }
  },
  fixUrl: function fixUrl(url) {
    if (!url) {
      if (window) {
        return window.location.href;
      }

      throw 'url is required';
    }
  }
};

exports.default = Utils;