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

var _reviews = require('./../components/reviews');

var _reviews2 = _interopRequireDefault(_reviews);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    ReviewsRoute: {
        displayName: 'ReviewsRoute'
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'src/routes/reviews.js',
    components: _components,
    locals: [],
    imports: [React.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}

var ReviewsRoute = _wrapComponent('ReviewsRoute')(function (_React$Component) {
    _inherits(ReviewsRoute, _React$Component);

    function ReviewsRoute() {
        _classCallCheck(this, ReviewsRoute);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReviewsRoute).apply(this, arguments));
    }

    _createClass(ReviewsRoute, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(_reactHelmet2.default, { title: 'Отзывы о проекте DonorSearch' }),
                React.createElement(_reviews2.default, this.props)
            );
        }
    }]);

    return ReviewsRoute;
}(React.Component));

ReviewsRoute.propTypes = {
    viewer: React.PropTypes.object,
    relay: React.PropTypes.object
};
exports.default = Relay.createContainer(ReviewsRoute, {
    initialVariables: {
        first: 10,
        step: 10
    },
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
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }],
                        children: [{
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
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
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }, {
                            children: [{
                                children: [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'userFirstName',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'userLastName',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'userVkontakteId',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Int'
                                }, {
                                    fieldName: 'timestamp',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Int'
                                }, {
                                    fieldName: 'vkontaktePostId',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Int'
                                }, {
                                    fieldName: 'text',
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
                    name: 'Reviews_ViewerRelayQL',
                    type: 'Viewer'
                };
            }();
        }
    }
});