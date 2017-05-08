'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Utils from './utils';

class Share extends React.Component {
  componentDidMount() {
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    Utils.loadButtons();
  }
  render() {
    const { locale, url } = this.props;
    return (
      <div
        style={ { display: 'none' } }
        className="line-it-button"
        data-lang={ Utils.localeToLang( locale ) }
        data-type="share-a"
        data-url={ url || location.href } />
    );
  }
}

Share.propTypes = {
  locale: PropTypes.oneOf( [ 'en', 'ja', 'zh-TW', 'th', 'id' ] ),
  url: PropTypes.string
};

Share.defaultProps = {
  locale: 'zh-TW'
};

export default Share;
