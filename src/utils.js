'use strict';

let scriptLoaded = false;
let scriptInjected = false;
const loadButton = () => {
  window.LineIt && window.LineIt.loadButton();
};

const Utils = {
  localeToLang: locale => 'zh-TW' === locale ? 'zh_Hant' : locale,
  loadButtons: () => {
    if ( scriptInjected ) {
      if ( scriptLoaded ) {
        loadButton();
      }
    } else {
      const script = document.createElement( 'script' );
      script.src = 'https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js';
      script.type = 'text/javascript';
      script.async = true;
      script.defer = true;
      script.onerror = function( error ) { throw error; };
      script.onload = function() {
        scriptLoaded = true;
        loadButton();
      };
      document.body.appendChild( script );
      scriptInjected = true;
    }
  },
  fixUrl( url ) {
    if ( !url ) {
      if ( window ) {
        return window.location.href;
      }

      throw 'url is required';
    }
  }
};

export default Utils;
