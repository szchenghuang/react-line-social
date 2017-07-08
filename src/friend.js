'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Utils from './utils';
import CONSTS from './consts';

class Friend extends React.Component {
  componentDidMount() {
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    Utils.loadButtons();
  }
  render() {
    const { style, className, locale, lineid, count, home } = this.props;
    return (
      <div
        style={ Object.assign( {}, { display: 'none' }, style ) }
        className={ 'line-it-button' + ( className ? '' : ' ' + className ) }
        data-lang={ Utils.localeToLang( locale ) }
        data-type="friend"
        data-lineid={ lineid }
        { ...( count && { 'data-count': 'true' } ) }
        { ...( home && { 'data-home': 'true' } ) } />
    );
  }
}

Friend.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  lineid: PropTypes.string.isRequired,
  locale: PropTypes.oneOf( CONSTS.LOCALES ),
  count: PropTypes.bool,
  home: PropTypes.bool
};

Friend.defaultProps = {
  locale: 'zh-TW'
};

export default Friend;
