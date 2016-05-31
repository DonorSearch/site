'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _isomorphicRelayRouter = require('isomorphic-relay-router');

var _isomorphicRelayRouter2 = _interopRequireDefault(_isomorphicRelayRouter);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouter = require('react-router');

var _reactRelay = require('react-relay');

var _reactRelay2 = _interopRequireDefault(_reactRelay);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _cookies = require('cookies');

var _cookies2 = _interopRequireDefault(_cookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GRAPHQL_URL = 'http://localhost:4000/graphql';

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
                Cookie: "token=" + queryRequests[0]._query.__variables__['token']
            };
            return _get(Object.getPrototypeOf(NetworkLayer.prototype), 'sendQueries', this).call(this, queryRequests);
        }
    }]);

    return NetworkLayer;
}(_reactRelay2.default.DefaultNetworkLayer);

var networkLayer = new NetworkLayer(GRAPHQL_URL, {});

exports.default = function (req, res, next) {
    var cookies = new _cookies2.default(req, res);
    (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
        if (error) {
            next(error);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {

            renderProps.params['token'] = req.cookies["token"] || req.cookies["sid"] || "";
            renderProps.params['token'] = encodeURIComponent(renderProps.params['token']);
            _isomorphicRelayRouter2.default.prepareData(renderProps, networkLayer).then(render, next);
        } else {
            res.status(404).send('Not Found');
        }

        function render(_ref) {
            var data = _ref.data;
            var props = _ref.props;

            try {
                var reactOutput = _server2.default.renderToString(_isomorphicRelayRouter2.default.render(props));
                var helmet = _reactHelmet2.default.rewind();
                cookies.set("token", data[0].response.viewer.token, {
                    domain: ".donorsearch.org",
                    expires: new Date(+new Date() + 86400 * 365 * 10 * 1000),
                    maxAge: 86400 * 365 * 10 * 1000
                });
                /* eslint-disable no-undef */
                res.render(_path2.default.resolve(__dirname, '..', 'views', 'index.ejs'), {
                    preloadedData: data,
                    reactOutput: reactOutput,
                    title: helmet.title
                });
                /* eslint-enable */
            } catch (e) {
                next(e);
            }
        }
    });
};