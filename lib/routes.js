'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ViewerQueries = require('./ViewerQueries');

var _ViewerQueries2 = _interopRequireDefault(_ViewerQueries);

var _start = require('./routes/start');

var _start2 = _interopRequireDefault(_start);

var _reviews = require('./routes/reviews');

var _reviews2 = _interopRequireDefault(_reviews);

var _auth = require('./components/auth');

var _auth2 = _interopRequireDefault(_auth);

var _app = require('./routes/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    path: '/',
    /*components: { app: App },
    queries: { app: ViewerQueries },*/
    component: _app2.default,
    queries: _ViewerQueries2.default,
    prepareParams: function prepareParams(_, context) {
        return {
            token: context.params.token || ""
        };
    },
    indexRoute: {
        components: {
            children: _start2.default,
            rightBlock: "hide"
        },
        queries: { children: _ViewerQueries2.default }
    },
    childRoutes: [{
        path: 'auth',
        components: {
            children: _auth2.default,
            rightBlock: "hide"
        }
    }, {
        path: 'reviews',
        components: {
            children: _reviews2.default,
            rightBlock: "show"
        },
        queries: { children: _ViewerQueries2.default }
    }]
}];