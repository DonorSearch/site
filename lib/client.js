'use strict';

var _isomorphicRelay = require('isomorphic-relay');

var _isomorphicRelay2 = _interopRequireDefault(_isomorphicRelay);

var _isomorphicRelayRouter = require('isomorphic-relay-router');

var _isomorphicRelayRouter2 = _interopRequireDefault(_isomorphicRelayRouter);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _reactRelay = require('react-relay');

var _reactRelay2 = _interopRequireDefault(_reactRelay);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var environment = new _reactRelay2.default.Environment();

environment.injectNetworkLayer(new _reactRelay2.default.DefaultNetworkLayer('/graphql'));

var data = JSON.parse(document.getElementById('preloadedData').textContent);

_isomorphicRelay2.default.injectPreparedData(environment, data);

var rootElement = document.getElementById('root');

(0, _reactRouter.match)({ routes: _routes2.default, history: _reactRouter.browserHistory }, function (error, redirectLocation, renderProps) {
  _isomorphicRelayRouter2.default.prepareInitialRender(environment, renderProps).then(function (props) {
    _reactDom2.default.render(_react2.default.createElement(_reactRouter.Router, props), rootElement);
  });
});