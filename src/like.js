'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Utils from './utils';

class Like extends React.Component {
  componentDidMount() {
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    Utils.loadButtons();
  }
  render() {
    const { locale, url, share, lineid } = this.props;
    return (
      <div
        style={ { display: 'none' } }
        className="line-it-button"
        data-lang={ Utils.localeToLang( locale ) }
        data-type="like"
        data-url={ url || location.href }
        { ...( share && { 'data-share': 'true' } ) }
        { ...( lineid && { 'data-lineid': lineid } ) } />
    );
  }
}

Like.propTypes = {
  locale: PropTypes.oneOf( [ 'en', 'ja', 'zh-TW', 'th', 'id' ] ),
  share: PropTypes.bool,
  lineid: PropTypes.string,
  url: PropTypes.string
};

Like.defaultProps = {
  locale: 'zh-TW'
};

export default Like;
