'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Utils from './utils';

class Like extends React.Component {
  componentDidMount() {
    if ( !Utils.getScript() ) {
      const script = document.createElement( 'script' );
      script.id = 'recaptcha';
      script.src = 'https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js';
      script.type = 'text/javascript';
      script.async = true;
      script.defer = true;
      script.onerror = function( error ) { throw error; };
      document.body.appendChild( script );
      Utils.setScript( script );
    }
  }
  render() {
    const { locale, url, share, lineid } = this.props;
    return (
      <div
        style={ { display: 'none' } }
        className="line-it-button"
        data-lang={ Utils.localeToLang( locale ) }
        data-type="like"
        data-url={ url }
        { ...( share && { 'data-share': 'true' } ) }
        { ...( lineid && { 'data-lineid': lineid } ) } />
    );
  }
}

Like.propTypes = {
  locale: PropTypes.oneOf( [ 'en', 'ja', 'zh-TW', 'th', 'id' ] ),
  url: PropTypes.string.isRequired,
  share: PropTypes.bool,
  lineid: PropTypes.string
};

Like.defaultProps = {
  locale: 'zh-TW'
};

export default Like;
