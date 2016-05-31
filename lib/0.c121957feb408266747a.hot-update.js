webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _isomorphicRelay = __webpack_require__(1);

	var _isomorphicRelay2 = _interopRequireDefault(_isomorphicRelay);

	var _isomorphicRelayRouter = __webpack_require__(485);

	var _isomorphicRelayRouter2 = _interopRequireDefault(_isomorphicRelayRouter);

	var _react = __webpack_require__(137);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(305);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(581);

	var _reactRelay = __webpack_require__(170);

	var _reactRelay2 = _interopRequireDefault(_reactRelay);

	var _routes = __webpack_require__(644);

	var _routes2 = _interopRequireDefault(_routes);

	var _jsCookie = __webpack_require__(664);

	var _jsCookie2 = _interopRequireDefault(_jsCookie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var environment = new _reactRelay2.default.Environment();

	var NetworkLayer = function (_Relay$DefaultNetwork) {
	    _inherits(NetworkLayer, _Relay$DefaultNetwork);

	    function NetworkLayer() {
	        _classCallCheck(this, NetworkLayer);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(NetworkLayer).apply(this, arguments));
	    }

	    _createClass(NetworkLayer, [{
	        key: 'sendQueries',
	        value: function sendQueries(queryRequests) {
	            this._init.headers = {
	                Token: queryRequests[0]._query.__variables__['token']
	            };
	            return _get(Object.getPrototypeOf(NetworkLayer.prototype), 'sendQueries', this).call(this, queryRequests);
	        }
	    }]);

	    return NetworkLayer;
	}(_reactRelay2.default.DefaultNetworkLayer);

	var networkLayer = new NetworkLayer('http://localhost:4000/graphql', {});
	environment.injectNetworkLayer(networkLayer);

	var data = JSON.parse(document.getElementById('preloadedData').textContent);

	_isomorphicRelay2.default.injectPreparedData(environment, data);

	var rootElement = document.getElementById('root');

	(0, _reactRouter.match)({ routes: _routes2.default, history: _reactRouter.browserHistory }, function (error, redirectLocation, renderProps) {
	    renderProps.params['token'] = _jsCookie2.default.get('sid');
	    _isomorphicRelayRouter2.default.prepareInitialRender(environment, renderProps).then(function (props) {
	        _reactDom2.default.render(_react2.default.createElement(_reactRouter.Router, props), rootElement);
	    });
	});

/***/ }
])