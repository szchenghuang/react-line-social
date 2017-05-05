'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Utils from './utils';

class Share extends React.Component {
  componentDidMount() {
    if ( !Utils.getScript() ) {
      const script = document.createElement( 'script' );
      script.id = 'recaptcha';
      script.src = 'https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js';
      script.type = 'text/javascript';
      script.async = true;
      script.defer = true;
      script.onerror = function( error ) { throw error; };
      script.onload = function() { window.LineIt.loadButton(); };
      document.body.appendChild( script );
      Utils.setScript( script );
    }
  }
  render() {
    const { locale, url } = this.props;
    return (
      <div
        style={ { display: 'none' } }
        className="line-it-button"
        data-lang={ Utils.localeToLang( locale ) }
        data-type="share-a"
        data-url={ location.href } />
    );
  }
}

Share.propTypes = {
  locale: PropTypes.oneOf( [ 'en', 'ja', 'zh-TW', 'th', 'id' ] )
};

Share.defaultProps = {
  locale: 'zh-TW'
};

export default Share;
