'use strict';

let lineScript;

const Utils = {
  localeToLang: locale => 'zh-TW' === locale ? 'zh_Hant' : locale,
  setScript: script => {
    if ( !lineScript ) {
      lineScript = script;
    }
  },
  getScript: () => lineScript
};

export default Utils;
