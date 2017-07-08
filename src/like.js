'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Utils from './utils';
import CONSTS from './consts';

class Like extends React.Component {
  componentDidMount() {
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    Utils.loadButtons();
  }
  render() {
    const { style, className, locale, share, lineid } = this.props;
    const url = Utils.fixUrl( this.props.url );

    return (
      <div
        style={ Object.assign( {}, { display: 'none' }, style ) }
        className={ 'line-it-button' + ( className ? '' : ' ' + className ) }
        data-lang={ Utils.localeToLang( locale ) }
        data-type="like"
        data-url={ url }
        { ...( share && { 'data-share': 'true' } ) }
        { ...( lineid && { 'data-lineid': lineid } ) } />
    );
  }
}

Like.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  lineid: PropTypes.string,
  locale: PropTypes.oneOf( CONSTS.LOCALES ),
  share: PropTypes.bool,
  url: PropTypes.string
};

Like.defaultProps = {
  locale: 'zh-TW'
};

export default Like;
