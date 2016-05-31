"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reviews = function (_React$Component) {
    _inherits(Reviews, _React$Component);

    function Reviews() {
        _classCallCheck(this, Reviews);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Reviews).apply(this, arguments));
    }

    _createClass(Reviews, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container", style: { float: "left", width: "700px" } },
                React.createElement(
                    "h1",
                    null,
                    "Отзывы о нашем проекте"
                ),
                this.props.viewer.recipientReviews.edges.map(function (_ref) {
                    var node = _ref.node;

                    return React.createElement(
                        "div",
                        { className: "thumbnail", style: { overflow: "hidden", padding: "10px" } },
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "a",
                                { style: { marginLeft: "2%" }, className: "author", href: "http://vk.com/id364164145", target: "_blank" },
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
                }),
                React.createElement(
                    "div",
                    { className: "col-md-9 col-sm-9 col-sm-offset-2 col-md-offset-2" },
                    React.createElement(
                        "a",
                        { id: "more_reviews", className: "btn btn-primary col-md-2 col-sm-2" },
                        "Еще отзывы"
                    )
                )
            );
        }
    }]);

    return Reviews;
}(React.Component);

Reviews.propTypes = {
    viewer: React.PropTypes.object.isRequired
};
exports.default = Reviews;