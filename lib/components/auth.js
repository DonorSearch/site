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
    Auth: {
        displayName: "Auth"
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: "src/components/auth.js",
    components: _components,
    locals: [],
    imports: [React.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}

var Auth = _wrapComponent("Auth")(function (_React$Component) {
    _inherits(Auth, _React$Component);

    function Auth() {
        _classCallCheck(this, Auth);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Auth).apply(this, arguments));
    }

    _createClass(Auth, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "span9", style: { outline: "0px dotted gray" } },
                React.createElement(
                    "h2",
                    { style: { marginTop: "-8px" } },
                    "Авторизация"
                ),
                React.createElement(
                    "div",
                    { className: "error", style: { display: "none" } },
                    React.createElement(
                        "p",
                        null,
                        "Не найден зарегистрированный пользователь с этим аккаунтом соцсети"
                    ),
                    React.createElement("hr", null)
                ),
                React.createElement(
                    "p",
                    null,
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "a",
                            { href: "", rel: "nofollow", className: "ico", "data-sn": "Vkontakte" },
                            React.createElement("img", { src: "/img/ico_Vkontakte.png", width: "40", height: "40", title: "Авторизация через ВКонтакте" })
                        ),
                        "     ",
                        React.createElement(
                            "a",
                            { href: "", rel: "nofollow", className: "ico", "data-sn": "Facebook" },
                            React.createElement("img", { src: "/img/ico_Facebook.png", width: "40", height: "40", title: "Авторизация через Facebook" })
                        ),
                        "     ",
                        React.createElement(
                            "a",
                            { href: "", rel: "nofollow", className: "ico", "data-sn": "Mailru" },
                            React.createElement("img", { src: "/img/ico_Mailru.png", width: "40", height: "40", title: "Авторизация через Mail.ru" })
                        ),
                        "     ",
                        React.createElement(
                            "a",
                            { href: "", rel: "nofollow", className: "ico", "data-sn": "OK" },
                            React.createElement("img", { src: "/img/ico_OK.png", width: "40", height: "40", title: "Авторизация через Одноклассники" })
                        ),
                        "     ",
                        React.createElement(
                            "a",
                            { href: "", rel: "nofollow", className: "ico", "data-sn": "Twitter" },
                            React.createElement("img", { src: "/img/ico_Twitter.png", width: "40", height: "40", title: "Авторизация через Twitter" })
                        ),
                        "     "
                    )
                ),
                React.createElement(
                    "div",
                    { style: { display: "block" } },
                    React.createElement("hr", null),
                    "или",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement(
                        "a",
                        { className: "btn btn-primary", href: "/reg_start" },
                        React.createElement("span", { className: "glyphicon glyphicon-tint" }),
                        " Регистрация донора (даже если вы еще не сдавали) "
                    ),
                    " ",
                    React.createElement(
                        "a",
                        { className: "btn btn-info", href: "/volunteers/reg" },
                        React.createElement("span", { className: "glyphicon glyphicon-heart-empty" }),
                        " Регистрация волонтера (если вы не можете сдавать кровь) "
                    )
                )
            );
        }
    }]);

    return Auth;
}(React.Component));

exports.default = Auth;