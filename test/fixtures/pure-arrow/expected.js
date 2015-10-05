'use strict';

var _myCustomModuleWrap2 = require('my-custom-module/wrap');

var _myCustomModuleWrap3 = _interopRequireDefault(_myCustomModuleWrap2);

var _react = require('react');

var _myOtherCustomModuleWrap2 = require('my-other-custom-module/wrap');

var _myOtherCustomModuleWrap3 = _interopRequireDefault(_myOtherCustomModuleWrap2);

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react2 = _interopRequireDefault(_react);

var _components = {
  _$A: {
    displayName: 'A',
    isFunction: true
  },
  _$B: {
    displayName: 'B',
    isFunction: true
  },
  _$C: {
    displayName: 'C',
    isFunction: true
  },
  _$actual: {
    displayName: 'actual',
    isFunction: true
  }
};

var _reactComponentWrapper = (0, _myCustomModuleWrap3['default'])({
  filename: '%FIXTURE_PATH%',
  components: _components,
  locals: [module],
  imports: [_react]
});

var _reactComponentWrapper2 = (0, _myOtherCustomModuleWrap3['default'])({
  filename: '%FIXTURE_PATH%',
  components: _components,
  locals: [],
  imports: []
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
  };
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var A = _wrapComponent('_$A')(function () {
  return _react2['default'].createElement('div', null);
});
var B = _wrapComponent('_$B')(function () {
  return _react2['default'].createElement('div', null);
});
var C = _wrapComponent('_$C')(function () {
  return _react2['default'].createElement('div', null);
});

exports.C = C;
exports['default'] = _wrapComponent('_$actual')(function () {
  return _react2['default'].createElement('div', null);
});
