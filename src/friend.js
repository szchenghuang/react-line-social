'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Utils from './utils';

class Friend extends React.Component {
  componentDidMount() {
    if ( !global.script ) {
      const script = document.createElement( 'script' );
      script.id = 'recaptcha';
      script.src = 'https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js';
      script.type = 'text/javascript';
      script.async = true;
      script.defer = true;
      script.onerror = function( error ) { throw error; };
      document.body.appendChild( script );
      global.script = script;
    }
  }
  render() {
    const { locale, lineid, count, home } = this.props;
    return (
      <div
        style={ { display: 'none' } }
        className="line-it-button"
        data-lang={ Utils.localeToLang( locale ) }
        data-type="friend"
        data-lineid={ lineid }
        { ...( count && { 'data-count': 'true' } ) }
        { ...( home && { 'data-home': 'true' } ) } />
    );
  }
}

Friend.propTypes = {
  locale: PropTypes.oneOf( [ 'en', 'ja', 'zh-TW', 'th', 'id' ] ),
  lineid: PropTypes.string.isRequired,
  count: PropTypes.bool,
  home: PropTypes.bool
};

Friend.defaultProps = {
  locale: 'zh-TW'
};

export default Friend;
