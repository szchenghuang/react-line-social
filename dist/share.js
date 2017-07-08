'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _consts = require('./consts');

var _consts2 = _interopRequireDefault(_consts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Share = function (_React$Component) {
  _inherits(Share, _React$Component);

  function Share() {
    _classCallCheck(this, Share);

    return _possibleConstructorReturn(this, (Share.__proto__ || Object.getPrototypeOf(Share)).apply(this, arguments));
  }

  _createClass(Share, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.componentDidUpdate();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      _utils2.default.loadButtons();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          className = _props.className,
          locale = _props.locale,
          type = _props.type;

      var url = _utils2.default.fixUrl(this.props.url);

      return _react2.default.createElement('div', {
        style: Object.assign({}, { display: 'none' }, style),
        className: 'line-it-button' + (className ? '' : ' ' + className),
        'data-lang': _utils2.default.localeToLang(locale),
        'data-type': type,
        'data-url': url });
    }
  }]);

  return Share;
}(_react2.default.Component);

Share.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  locale: _propTypes2.default.oneOf(_consts2.default.LOCALES),
  type: _propTypes2.default.oneOf(_consts2.default.TYPES),
  url: _propTypes2.default.string
};

Share.defaultProps = {
  locale: 'zh-TW',
  type: 'share-a'
};

exports.default = Share;