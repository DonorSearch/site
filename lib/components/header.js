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
    Header: {
        displayName: "Header"
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: "src/components/header.js",
    components: _components,
    locals: [],
    imports: [React.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}

var Header = _wrapComponent("Header")(function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "header",
                { style: { minWidth: "770px" } },
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "navbar-header" },
                        React.createElement("img", { src: "/img/logo_white.png", style: { height: "30px", float: "left", marginTop: "8px", marginLeft: "9px" } }),
                        React.createElement(
                            "a",
                            { className: "navbar-brand", href: "/" },
                            "DonorSearch"
                        )
                    ),
                    React.createElement(
                        "nav",
                        { className: "collapse navbar-collapse bs-navbar" },
                        React.createElement(
                            "ul",
                            { className: "nav navbar-nav" },
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement("span", { style: { fontSize: "19px", color: "rgb(226, 210, 103)" }, className: "glyphicon glyphicon-thumbs-up" })
                                )
                            ),
                            React.createElement(
                                "li",
                                { className: "dropdown" },
                                React.createElement(
                                    "a",
                                    { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                                    "О проекте ",
                                    React.createElement("b", { className: "caret" })
                                ),
                                React.createElement(
                                    "ul",
                                    { className: "dropdown-menu" },
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/presentation" },
                                            "Презентация проекта"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/team" },
                                            "Команда"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/feedback" },
                                            "Контакты"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/statistics" },
                                            "Наши результаты"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/help" },
                                            "Помочь проекту"
                                        )
                                    ),
                                    React.createElement("li", { className: "divider" }),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/reviews" },
                                            "Отзывы о проекте"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/media" },
                                            "СМИ, конкурсы, гранты"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/partners" },
                                            "Партнеры"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/thanks" },
                                            "Благодарности"
                                        )
                                    ),
                                    React.createElement("li", { className: "divider" }),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/shop" },
                                            "Наш магазин"
                                        )
                                    ),
                                    React.createElement("li", { className: "divider" }),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/legal-details" },
                                            "Реквизиты НКО"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/rules" },
                                            "Пользовательское соглашение"
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "li",
                                { className: "dropdown" },
                                React.createElement(
                                    "a",
                                    { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                                    "Донорам ",
                                    React.createElement("b", { className: "caret" })
                                ),
                                React.createElement(
                                    "ul",
                                    { className: "dropdown-menu" },
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/reg_start" },
                                            "Регистрация"
                                        )
                                    ),
                                    React.createElement("li", { className: "divider" }),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/donation" },
                                            "О донорстве"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/donors/how" },
                                            "Как сдать кровь?"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/bloodstations" },
                                            "Пункты сдачи крови"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/contraindications" },
                                            "Противопоказания"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/donation/recommendations" },
                                            "Рекомендации"
                                        )
                                    ),
                                    React.createElement("li", { className: "divider" }),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/donors/podium" },
                                            React.createElement("span", { className: "glyphicon glyphicon-star" }),
                                            " Доска почета"
                                        )
                                    ),
                                    React.createElement("li", { className: "divider" }),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/donors/achievements" },
                                            "Достижения"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        { style: { display: "none" } },
                                        React.createElement(
                                            "a",
                                            { href: "/donors/bonuses" },
                                            "Бонусная программа"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/rules/donor" },
                                            "Правила пользования"
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "li",
                                { className: "dropdown" },
                                React.createElement(
                                    "a",
                                    { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                                    "Поиск доноров",
                                    React.createElement("b", { className: "caret" })
                                ),
                                React.createElement(
                                    "ul",
                                    { className: "dropdown-menu" },
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/search/about" },
                                            "Что это такое?"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/search?tab=auto" },
                                            "Автоматический поиск"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/search?tab=manual" },
                                            "Ручной поиск"
                                        )
                                    ),
                                    React.createElement("li", { className: "divider" }),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/recipients/search" },
                                            "Сейчас ищут доноров"
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "li",
                                { className: "dropdown" },
                                React.createElement(
                                    "a",
                                    { style: { color: "rgb(255, 214, 0) !important" }, href: "/help?from=ds_topmenu" },
                                    React.createElement("span", { className: "glyphicon glyphicon-heart" }),
                                    " Поддержать проект"
                                )
                            )
                        ),
                        React.createElement("ul", { className: "nav navbar-nav navbar-right" }),
                        React.createElement(
                            "ul",
                            { className: "nav navbar-nav navbar-right", "data-frame": "MainBox/UserAuthTop" },
                            React.createElement(
                                "li",
                                { "data-name": "menu_auth", className: "dropdown" },
                                React.createElement("img", { src: "https://st.drsh.org/i/NjkzMzg/ab7d126a8174681_35_35.jpg", "data-name": "user_avatar" })
                            ),
                            React.createElement(
                                "li",
                                { "data-name": "menu_auth", className: "dropdown" },
                                React.createElement(
                                    "a",
                                    { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                                    React.createElement(
                                        "span",
                                        { "data-name": "user_name", title: "Виталий", checked: "checked" },
                                        "Архипов Виталий"
                                    ),
                                    " ",
                                    React.createElement("b", { className: "caret" })
                                ),
                                React.createElement(
                                    "ul",
                                    { className: "dropdown-menu" },
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { "data-name": "link_profile_show", href: "/users/id12529217" },
                                            "Моя страница"
                                        )
                                    ),
                                    React.createElement("li", { className: "divider" }),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/profile?tab=personal" },
                                            "Мой профиль"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/profile?tab=messages" },
                                            "Мои сообщения"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/profile?tab=contacts" },
                                            "Мои контакты"
                                        )
                                    ),
                                    React.createElement("li", { className: "divider" }),
                                    React.createElement(
                                        "li",
                                        { className: "dropdown-header divider-header" },
                                        React.createElement(
                                            "span",
                                            null,
                                            "Донор"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/profile?tab=donations" },
                                            "Мои кроводачи"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/profile?tab=donor_notifies" },
                                            "Настройки уведомлений"
                                        )
                                    ),
                                    React.createElement("li", { className: "divider" }),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "/logout" },
                                            "Выход"
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(React.Component));

exports.default = Header;