'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ViewerQueries = require('./ViewerQueries');

var _ViewerQueries2 = _interopRequireDefault(_ViewerQueries);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _start = require('./routes/start');

var _start2 = _interopRequireDefault(_start);

var _reviews = require('./routes/reviews');

var _reviews2 = _interopRequireDefault(_reviews);

var _app = require('./routes/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Test = function (_React$Component) {
    _inherits(Test, _React$Component);

    function Test() {
        _classCallCheck(this, Test);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Test).apply(this, arguments));
    }

    _createClass(Test, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'test'
            );
        }
    }]);

    return Test;
}(React.Component);

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
        path: 'test',
        component: Test
    }, {
        path: 'reviews',
        components: {
            children: _reviews2.default,
            rightBlock: "show"
        },
        queries: { children: _ViewerQueries2.default }
    }]
}];