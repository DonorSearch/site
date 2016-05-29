'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isomorphicRelayRouter = require('isomorphic-relay-router');

var _isomorphicRelayRouter2 = _interopRequireDefault(_isomorphicRelayRouter);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouter = require('react-router');

var _reactRelay = require('react-relay');

var _reactRelay2 = _interopRequireDefault(_reactRelay);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GRAPHQL_URL = 'http://localhost:4000/graphql';

var networkLayer = new _reactRelay2.default.DefaultNetworkLayer(GRAPHQL_URL);

exports.default = function (req, res, next) {
    (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
        if (error) {
            next(error);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {

            _isomorphicRelayRouter2.default.prepareData(renderProps, networkLayer).then(render, next);
        } else {
            res.status(404).send('Not Found');
        }

        function render(_ref) {
            var data = _ref.data;
            var props = _ref.props;


            var reactOutput = _server2.default.renderToString(_isomorphicRelayRouter2.default.render(props));

            res.render(_path2.default.resolve(__dirname, '..', 'views', 'index.ejs'), {
                preloadedData: data,
                reactOutput: reactOutput
            });
        }
    });
};