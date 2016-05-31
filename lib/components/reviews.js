"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redboxReact2 = require("redbox-react");

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require("react");

var React = _interopRequireWildcard(_react2);

var _reactTransformCatchErrors3 = require("react-transform-catch-errors");

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Reviews: {
        displayName: "Reviews"
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: "src/components/reviews.js",
    components: _components,
    locals: [],
    imports: [React.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}

var Reviews = _wrapComponent("Reviews")(function (_React$Component) {
    _inherits(Reviews, _React$Component);

    function Reviews() {
        _classCallCheck(this, Reviews);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Reviews).apply(this, arguments));
    }

    _createClass(Reviews, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Отзывы о нашем проекте"
                ),
                React.createElement(
                    "div",
                    { className: "container", style: { float: "left", width: "700px" } },
                    this.props.viewer.recipientReviews.edges.map(function (_ref) {
                        var node = _ref.node;

                        return React.createElement(
                            "div",
                            { key: node.id, className: "thumbnail", style: { overflow: "hidden", padding: "10px" } },
                            React.createElement(
                                "div",
                                null,
                                React.createElement(
                                    "a",
                                    { style: { marginLeft: "2%" }, className: "author", href: "http://vk.com/id" + node.userVkontakteId, target: "_blank" },
                                    node.userFirstName,
                                    " ",
                                    node.userLastName
                                ),
                                React.createElement(
                                    "a",
                                    { "data-name": "link", target: "_blank", href: "http://vk.com/topic-21179173_24022855?post=" + node.vkontaktePostId },
                                    React.createElement(
                                        "span",
                                        { style: { fontSize: "x-small", fontStyle: "italic", float: "right" }, id: "date" },
                                        node.timestamp
                                    )
                                )
                            ),
                            React.createElement("img", { className: "img", style: { borderRadius: "500px !important", display: "inline", float: "left", margin: "10px" }, "data-name": "img", src: node.imageUrl }),
                            React.createElement("br", null),
                            React.createElement("span", { "data-name": "message", style: { marginTop: "1%" }, className: "message", dangerouslySetInnerHTML: { __html: node.text } })
                        );
                    })
                ),
                this.props.viewer.recipientReviews.pageInfo.hasNextPage ? React.createElement(
                    "div",
                    { className: "col-md-9 col-sm-9 col-sm-offset-2 col-md-offset-2" },
                    React.createElement(
                        "a",
                        { onClick: function onClick() {
                                _this2.props.relay.setVariables({ first: _this2.props.relay.variables.first + _this2.props.relay.variables.step });
                            }, className: "btn btn-primary col-md-2 col-sm-2" },
                        "Еще отзывы"
                    )
                ) : null
            );
        }
    }]);

    return Reviews;
}(React.Component));

Reviews.propTypes = {
    viewer: React.PropTypes.object.isRequired,
    relay: React.PropTypes.object
};
exports.default = Reviews;