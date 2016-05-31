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
    Footer: {
        displayName: "Footer"
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: "src/components/footer.js",
    components: _components,
    locals: [],
    imports: [React.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}

var Footer = _wrapComponent("Footer")(function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "footer",
                { style: { minWidth: "770px" } },
                React.createElement(
                    "div",
                    { className: "container menu" },
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "DonorSearch"
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "/presentation" },
                                    "Презентация"
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
                                    { href: "/help" },
                                    "Помощь проекту"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "/shop" },
                                    "Наш магазин"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "/feedback" },
                                    "Обратная связь"
                                )
                            ),
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
                                    "Лицензионное соглашение"
                                )
                            )
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "С нами и о нас"
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "/news" },
                                    "Новости"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "/affiliates" },
                                    "Представительства"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "/media?tab=reports" },
                                    "СМИ о нас"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "/reviews" },
                                    "Отзывы"
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
                            )
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Донорам"
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "/reg_start" },
                                    "Регистрация"
                                )
                            ),
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
                                    { href: "/bloodstations" },
                                    "Пункты сдачи крови"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "/search" },
                                    "Поиск доноров"
                                )
                            )
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Волонтерам"
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "/volunteers" },
                                    "Web-волонтерство"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "/help?tab=help_info" },
                                    "Оффлайн-волонтерство"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "/volunteers/apps/about" },
                                    "Мобильные приложения"
                                )
                            )
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Организациям"
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "/widgets" },
                                    "Разработчикам"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "/partnership" },
                                    "Бонусная программа"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "/ads" },
                                    "Реклама на сайте"
                                )
                            )
                        )
                    ),
                    React.createElement("div", { className: "clearfix" }),
                    React.createElement(
                        "ul",
                        { style: { width: "40%" } },
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "p",
                                { className: "text-justify" },
                                React.createElement("img", { src: "/img/logo_white_500_500.png", style: { height: "80px", margin: "0px 10px 0 0", float: "left" } }),
                                "DonorSearch © 2010-2014. Открытая база доноров.",
                                React.createElement("br", null),
                                "Все права защищены.Если не указано иначе, все материалы сайта доступны по лицензии Creative Commons CC-BY-SA 3.0"
                            )
                        )
                    ),
                    React.createElement(
                        "ul",
                        { style: { width: "40%" } },
                        React.createElement(
                            "li",
                            null,
                            "Рассказать о проекте друзьям"
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "ul",
                                { className: "nav nav-list socnetworks" },
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { rel: "nofollow", className: "ico" },
                                        React.createElement("img", { src: "/img/ico_Vkontakte.png", width: "40", height: "40", title: "Поделиться с друзьями ВКонтакте" })
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { rel: "nofollow", href: "http://www.facebook.com/sharer.php?u=http://donorsearch.ru", className: "ico" },
                                        React.createElement("img", { src: "/img/ico_Facebook.png", width: "40", height: "40", title: "Поделиться с друзьями в Facebook" })
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { rel: "nofollow", title: "Опубликовать в Twitter", href: "#", name: "twitter", className: "ico" },
                                        React.createElement("img", { src: "/img/ico_Twitter.png", alt: "Опубликовать в Twitter" })
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { rel: "nofollow", href: "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl=http://donorsearch.ru", className: "ico" },
                                        React.createElement("img", { src: "/img/ico_OK.png", width: "40", height: "40", title: "Поделиться с друзьями в Одноклассниках" })
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { rel: "nofollow", title: "Опубликовать в Google+", href: "https://plus.google.com/share?url=http://donorsearch.ru", name: "google", className: "ico" },
                                        React.createElement("img", { src: "/img/ico_Google.png", alt: "Опубликовать в Google Plus" })
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "http://www.livejournal.com/update.bml?repost_type=c&repost=http%3A%2F%2Fdonorsearch.livejournal.com%2F878.html", target: "_blank", rel: "nofollow", title: "Опубликовать в своем блоге livejournal.com", className: "ico" },
                                        React.createElement("img", { src: "/img/ico_LJ.png", alt: "Опубликовать в своем блоге livejournal.com", width: "40", height: "40" })
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement("div", { className: "clearfix" }),
                    React.createElement("div", { style: { height: "40px" } })
                )
            );
        }
    }]);

    return Footer;
}(React.Component));

exports.default = Footer;