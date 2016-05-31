'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var React = _interopRequireWildcard(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRelay = require('react-relay');

var Relay = _interopRequireWildcard(_reactRelay);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _start = require('./../components/start');

var _start2 = _interopRequireDefault(_start);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    StartRoute: {
        displayName: 'StartRoute'
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'src/routes/start.js',
    components: _components,
    locals: [],
    imports: [React.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}

var StartRoute = _wrapComponent('StartRoute')(function (_React$Component) {
    _inherits(StartRoute, _React$Component);

    function StartRoute() {
        _classCallCheck(this, StartRoute);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(StartRoute).apply(this, arguments));
    }

    _createClass(StartRoute, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(_reactHelmet2.default, { title: 'DonorSearch. Доноры крови: поиск, учет кроводач, рекомендации, противопоказания, пункты сдачи крови, связь через социальные сети.s' }),
                React.createElement(_start2.default, { viewer: this.props.viewer })
            );
        }
    }]);

    return StartRoute;
}(React.Component));

StartRoute.propTypes = {
    viewer: React.PropTypes.object
};
exports.default = Relay.createContainer(StartRoute, {
    fragments: {
        viewer: function viewer() {
            return function () {
                return {
                    children: [{
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'first',
                            value: {
                                kind: 'CallValue',
                                callValue: 6
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallValue',
                                callValue: 'random'
                            }
                        }],
                        children: [{
                            children: [{
                                children: [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'vkontaktePostId',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Int'
                                }, {
                                    fieldName: 'smallText',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    calls: [{
                                        kind: 'Call',
                                        metadata: {},
                                        name: 'width',
                                        value: {
                                            kind: 'CallValue',
                                            callValue: 100
                                        }
                                    }, {
                                        kind: 'Call',
                                        metadata: {},
                                        name: 'height',
                                        value: {
                                            kind: 'CallValue',
                                            callValue: 100
                                        }
                                    }],
                                    fieldName: 'imageUrl',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }],
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    inferredRootCallName: 'node',
                                    inferredPrimaryKey: 'id',
                                    isRequisite: true
                                },
                                type: 'RecipientReview'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'RecipientReviewEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        fieldName: 'recipientReviews',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true
                        },
                        type: 'RecipientReviewConnection'
                    }],
                    id: Relay.QL.__id(),
                    kind: 'Fragment',
                    metadata: {},
                    name: 'Start_ViewerRelayQL',
                    type: 'Viewer'
                };
            }();
        }
    }
});