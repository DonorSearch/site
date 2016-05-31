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

var _reactRouter = require('react-router');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Start: {
        displayName: 'Start'
    }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'src/components/start.js',
    components: _components,
    locals: [],
    imports: [React.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformCatchErrors2(Component, id);
    };
}

var Start = _wrapComponent('Start')(function (_React$Component) {
    _inherits(Start, _React$Component);

    function Start() {
        _classCallCheck(this, Start);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Start).apply(this, arguments));
    }

    _createClass(Start, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { id: 'carousel-example-generic', className: 'carousel slide', 'data-ride': 'carousel', 'data-interval': '10000' },
                    React.createElement(
                        'ol',
                        { className: 'carousel-indicators' },
                        React.createElement('li', { 'data-target': '#carousel-example-generic', 'data-slide-to': '0', className: 'active' }),
                        React.createElement('li', { 'data-target': '#carousel-example-generic', 'data-slide-to': '1' }),
                        React.createElement('li', { 'data-target': '#carousel-example-generic', 'data-slide-to': '2' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'carousel-inner' },
                        React.createElement(
                            'div',
                            { className: 'item active' },
                            React.createElement('img', { 'data-name': 'slider_img1', src: '', style: { backgroundRepeat: "no-repeat", backgroundPosition: "left center", width: "1150px !important", height: "500px !important" }, alt: '...' }),
                            React.createElement(
                                'div',
                                { className: 'carousel-caption' },
                                React.createElement(
                                    'div',
                                    { style: { textAlign: "justify", backgroundColor: "rgb(5, 34, 107)", opacity: "0.85", padding: "20px", fontSize: "16px", marginLeft: "282px", width: "350px", position: "absolute", marginTop: "-380px" } },
                                    React.createElement(
                                        'p',
                                        null,
                                        'Становитесь донорами вместе с нами, даже если вы еще не сдавали кровь ни разу, получайте бонусы от партнеров проекта и делитесь достижениями с друзьями!'
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        React.createElement(
                                            'a',
                                            { className: 'btn btn-lg btn-info', style: { width: "100%" }, href: '/reg_start' },
                                            'Стать донором'
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'item' },
                            React.createElement('img', { src: '', 'data-name': 'slider_img2', style: { backgroundRepeat: "no-repeat", backgroundPosition: "right center", width: "1150px", height: "500px" }, alt: '...' }),
                            React.createElement(
                                'div',
                                { className: 'carousel-caption' },
                                React.createElement(
                                    'div',
                                    { style: { textAlign: "justify", backgroundColor: "rgb(151, 0, 0)", opacity: "1", padding: "20px", fontSize: "16px", width: "286px", height: "500px", position: "absolute", marginTop: "-449px" } },
                                    React.createElement('img', { src: '/img/logo_white_500_500.png', style: { width: "150px", marginBottom: "20px", marginLeft: "47px" } }),
                                    React.createElement(
                                        'p',
                                        null,
                                        '  '
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        'DonorSearch - уникальный IT-ресурс для доноров крови в СНГ.'
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        'Ведите учет своих кроводач, узнавайте, где именно не хвататет запасов крови и компонентов крови.'
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        '  '
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        React.createElement(
                                            'a',
                                            { className: 'btn btn-lg btn-default', style: { width: "100%" }, href: '/reg_start' },
                                            'Присоединиться'
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'item' },
                            React.createElement('img', { 'data-name': 'slider_img3', style: { backgroundRepeat: "no-repeat", backgroundPosition: "center center", width: "1150px", height: "500px" }, alt: '...' }),
                            React.createElement(
                                'div',
                                { className: 'carousel-caption' },
                                React.createElement(
                                    'div',
                                    { style: { textAlign: "justify", backgroundColor: "rgb(88, 156, 0)", opacity: "0.85", padding: "20px", fontSize: "16px", marginLeft: "-59px", width: "350px", position: "absolute", marginTop: "-402px" } },
                                    React.createElement(
                                        'p',
                                        null,
                                        'Становитесь волонтером проекта и помогайте спасать жизни вместе с нами.'
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        'Вместе делаем одно хорошее дело!'
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        React.createElement(
                                            'a',
                                            { className: 'btn btn-lg btn-success', style: { width: "100%" }, href: '/volunteers' },
                                            'Стать волонтером проекта'
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'a',
                        { className: 'left carousel-control', href: '#carousel-example-generic', 'data-slide': 'prev' },
                        React.createElement('span', { className: 'glyphicon glyphicon-chevron-left' })
                    ),
                    React.createElement(
                        'a',
                        { className: 'right carousel-control', href: '#carousel-example-generic', 'data-slide': 'next' },
                        React.createElement('span', { className: 'glyphicon glyphicon-chevron-right' })
                    )
                ),
                React.createElement('div', { style: { height: "1px", clear: "both" } }),
                React.createElement('div', { style: { height: "30px" } }),
                React.createElement('div', { className: 'hr', style: { height: "10px" } }),
                React.createElement(
                    'div',
                    { style: { textAlign: "justify", marginTop: "30px" } },
                    React.createElement(
                        'div',
                        { style: { float: "left", width: "30%" } },
                        React.createElement(
                            'h1',
                            null,
                            'Я - донор!'
                        ),
                        React.createElement(
                            'p',
                            { style: { minHeight: "150px" } },
                            'DonorSearch - это удобный сервис, позволяющий не только вести учет и планирование своих кроводач, но и узнавать, где именно и в какие дни есть особая нехватка донорской крови или компонентов крови в вашем городе. А особая программа привилегий для доноров является дополнительным приятным бонусом к спасению жизней.'
                        ),
                        React.createElement('div', { style: { height: "20px" } }),
                        React.createElement(
                            'a',
                            { href: '/reg_start', className: 'superbutton' },
                            'Зарегистрироваться'
                        )
                    ),
                    React.createElement('div', { style: { float: "left", width: "5%", height: "10px" } }),
                    React.createElement(
                        'div',
                        { style: { float: "left", width: "30%" } },
                        React.createElement(
                            'h1',
                            null,
                            'Ищу донора'
                        ),
                        React.createElement(
                            'p',
                            { style: { minHeight: "150px" } },
                            'Чтобы найти донора - выберите страну и город, а также группу и резус-фактор необходимой донорской крови.В случае, когда кровь не важна выберите пункт - группа крови любая.Для автоматического приглашения доноров создайте карточку реципиента - наша система будет работать вместе с вами!'
                        ),
                        React.createElement('div', { style: { height: "20px" } }),
                        React.createElement(
                            'a',
                            { className: 'superbutton', href: '/search' },
                            'Начать поиск донора'
                        )
                    ),
                    React.createElement('div', { style: { float: "left", width: "5%", height: "10px" } }),
                    React.createElement(
                        'div',
                        { style: { float: "left", width: "30%" } },
                        React.createElement(
                            'h1',
                            null,
                            'Волонтеру'
                        ),
                        React.createElement(
                            'p',
                            { style: { minHeight: "150px" } },
                            'Проект DonorSearch создан и спасает жизни благодаря активности граждан, которые готовы поддерживать социально-значимые инициативы.Мы будем рады каждому волонтеру - не важно сколько Вам лет, где живете и являетесь ли Вы донором.Главное, что даже 5 минут в день могут помочь тем, кто в этом нуждается.Вместе делаем одно хорошее дело!'
                        ),
                        React.createElement('div', { style: { height: "20px" } }),
                        React.createElement(
                            'a',
                            { className: 'superbutton', href: '/volunteers' },
                            '              Участвовать              '
                        )
                    )
                ),
                React.createElement('div', { style: { height: "1px", clear: "both" } }),
                React.createElement('div', { style: { height: "30px" } }),
                React.createElement('div', { className: 'hr', style: { height: "10px" } }),
                React.createElement(
                    'div',
                    { style: { marginTop: "30px" } },
                    React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'h1',
                            null,
                            'О нас'
                        ),
                        React.createElement(
                            'div',
                            { style: { width: "100%" } },
                            React.createElement(
                                'div',
                                { style: { float: "left", width: "50%" } },
                                React.createElement(
                                    'p',
                                    { style: { marginTop: "6px" } },
                                    'Мы - ',
                                    React.createElement(
                                        'strong',
                                        null,
                                        'не государственный'
                                    ),
                                    ' некоммерческий проект, созданный молодыми людьми из России.Ежедневно, благодаря проекту DonorSearch, несколько новых доноров сдают кровь, а значит, несколько новых людей получают шанс на выздоровление.'
                                ),
                                React.createElement(
                                    'p',
                                    null,
                                    React.createElement(
                                        'strong',
                                        null,
                                        'Каждый день тысячи людей нуждаются в донорской крови.Помогите нам спасти их!'
                                    )
                                ),
                                React.createElement(
                                    'p',
                                    null,
                                    'Ежегодно 1, 5 млн людей требуются переливания крови, и в России показатели донорства только вполовину удовлетворяют нужды здравоохранения.'
                                ),
                                React.createElement(
                                    'p',
                                    null,
                                    'По статистике, каждый третий человек в течение жизни сталкивается с необходимостью переливания крови!'
                                ),
                                React.createElement(
                                    'p',
                                    null,
                                    'За последний год мы помогли более 2000 больным.'
                                ),
                                React.createElement(
                                    'p',
                                    null,
                                    React.createElement(
                                        'strong',
                                        null,
                                        'Вместе делаем одно хорошее дело!'
                                    )
                                ),
                                React.createElement(
                                    'a',
                                    { className: 'btn btn-danger btn-lg', style: { width: "100%", marginTop: "20px" }, href: '/help' },
                                    'Помочь проекту'
                                )
                            ),
                            React.createElement(
                                'div',
                                { style: { float: "left", width: "45%", marginLeft: "5%" } },
                                React.createElement(
                                    'h2',
                                    { style: { fontSize: "18px", marginTop: "0px" } },
                                    'Репортаж "Первого канала" о нас '
                                ),
                                React.createElement('iframe', { width: '400px', height: '300px', src: '//www.youtube.com/embed/E8I9YekdmaY', frameBorder: '0', allowFullScreen: 'true' })
                            )
                        ),
                        React.createElement('div', { className: 'clearfix' })
                    ),
                    React.createElement('div', { style: { height: "1px", clear: "both" } }),
                    React.createElement('div', { style: { height: "1px", clear: "both" } })
                ),
                React.createElement(
                    'div',
                    { style: { marginTop: "30px" } },
                    React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'h1',
                            { style: { float: "left" } },
                            'Отзывы'
                        ),
                        React.createElement(
                            _reactRouter.Link,
                            { className: 'bannervideolink', style: { width: "257px", float: "right", marginTop: "5px" }, to: '/reviews' },
                            'Смотреть все отзывы'
                        )
                    ),
                    React.createElement('div', { className: 'clearfix' }),
                    React.createElement('div', { style: { height: "1px", marginTop: "-5px" } }),
                    React.createElement('div', { className: 'clearfix' }),
                    React.createElement(
                        'div',
                        { className: 'reviews', 'data-name': 'reviews' },
                        this.props.viewer.recipientReviews.edges.map(function (_ref) {
                            var node = _ref.node;

                            return React.createElement(
                                'div',
                                { className: 'item', key: node.id },
                                React.createElement('img', { 'data-name': 'photo', src: node.imageUrl }),
                                React.createElement('span', { 'data-name': 'text', dangerouslySetInnerHTML: { __html: node.smallText } }),
                                React.createElement('br', null),
                                React.createElement(
                                    'a',
                                    { target: '_blank', href: "http://vk.com/topic-21179173_24022855?post=" + node.vkontaktePostId, 'data-name': 'link' },
                                    'Читать отзыв'
                                )
                            );
                        }),
                        React.createElement('div', { className: 'clearfix' })
                    ),
                    React.createElement('div', { style: { height: "1px", clear: "both" } }),
                    React.createElement('div', { style: { height: "1px", clear: "both" } })
                ),
                React.createElement('div', { style: { height: "1px", clear: "both" } }),
                React.createElement('div', { className: 'hr', style: { height: "10px" } })
            );
        }
    }]);

    return Start;
}(React.Component));

Start.propTypes = {
    viewer: React.PropTypes.object.isRequired
};
exports.default = Start;