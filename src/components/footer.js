import * as React from 'react'
class Footer extends React.Component {
    render() {
        return <footer style={{ minWidth: "770px" }}>
            <div className="container menu">
                <div>
                    <ul>
                        <li>DonorSearch</li>
                        <li><a href="/presentation">Презентация</a></li>
                        <li><a href="/team">Команда</a></li>
                        <li><a href="/help">Помощь проекту</a></li>
                        <li><a href="/shop">Наш магазин</a></li>
                        <li><a href="/feedback">Обратная связь</a></li>
                        <li><a href="/legal-details">Реквизиты НКО</a></li>
                        <li><a href="/rules">Лицензионное соглашение</a></li>
                    </ul>
                    <ul>
                        <li>С нами и о нас</li>
                        <li><a href="/news">Новости</a></li>
                        <li><a href="/affiliates">Представительства</a></li>
                        <li><a href="/media?tab=reports">СМИ о нас</a></li>
                        <li><a href="/reviews">Отзывы</a></li>
                        <li><a href="/partners">Партнеры</a></li>
                        <li><a href="/thanks">Благодарности</a></li>

                    </ul>
                    <ul>
                        <li>Донорам</li>
                        <li><a href="/reg_start">Регистрация</a></li>
                        <li><a href="/donation">О донорстве</a></li>
                        <li><a href="/bloodstations">Пункты сдачи крови</a></li>
                        <li><a href="/search">Поиск доноров</a></li>
                    </ul>
                    <ul>
                        <li>Волонтерам</li>
                        <li><a href="/volunteers">Web-волонтерство</a></li>
                        <li><a href="/help?tab=help_info">Оффлайн-волонтерство</a></li>
                        <li><a href="/volunteers/apps/about">Мобильные приложения</a></li>
                    </ul>


                    <ul>
                        <li>Организациям</li>
                        <li><a href="/widgets">Разработчикам</a></li>
                        <li><a href="/partnership">Бонусная программа</a></li>
                        <li><a href="/ads">Реклама на сайте</a></li>

                    </ul>
                </div>
                <div className="clearfix"></div>
                <ul style={{ width: "40%" }}>
                    <li>
                        <p className="text-justify">
                            <img src="/img/logo_white_500_500.png" style={{ height: "80px", margin: "0px 10px 0 0", float: "left" }} />
                            DonorSearch &copy; 2010-2014. Открытая база доноров.<br />Все права защищены.Если не указано иначе, все материалы сайта доступны по лицензии Creative Commons CC-BY-SA 3.0</p>
                    </li>
                </ul>
                <ul style={{ width: "40%" }}>
                    <li>Рассказать о проекте друзьям</li>
                    <li>
                        <ul className="nav nav-list socnetworks">
                            <li><a rel="nofollow" className="ico">
                                <img src="/img/ico_Vkontakte.png" width="40" height="40" title="Поделиться с друзьями ВКонтакте" />
                            </a>
                            </li>
                            <li><a rel="nofollow" href="http://www.facebook.com/sharer.php?u=http://donorsearch.ru" className="ico">
                                <img src="/img/ico_Facebook.png" width="40" height="40" title="Поделиться с друзьями в Facebook" />
                            </a></li>
                            <li><a rel="nofollow" title="Опубликовать в Twitter" href="#" name="twitter" className="ico">
                                <img src="/img/ico_Twitter.png" alt="Опубликовать в Twitter" />
                            </a></li>
                            <li><a rel="nofollow" href="http://www.odnoklassniki.ru/dk?st.cmd=addShare&amp;st.s=1&amp;st._surl=http://donorsearch.ru" className="ico">
                                <img src="/img/ico_OK.png" width="40" height="40" title="Поделиться с друзьями в Одноклассниках" />
                            </a></li>
                            <li><a rel="nofollow" title="Опубликовать в Google+" href="https://plus.google.com/share?url=http://donorsearch.ru" name="google" className="ico">
                                <img src="/img/ico_Google.png" alt="Опубликовать в Google Plus" />
                            </a></li>
                            <li><a href="http://www.livejournal.com/update.bml?repost_type=c&amp;repost=http%3A%2F%2Fdonorsearch.livejournal.com%2F878.html" target="_blank" rel="nofollow" title="Опубликовать в своем блоге livejournal.com" className="ico">
                                <img src="/img/ico_LJ.png" alt="Опубликовать в своем блоге livejournal.com" width="40" height="40" />
                            </a></li>
                        </ul>
                    </li>
                </ul>
                <div className="clearfix"></div>
                <div style={{height:"40px"}}></div>
            </div>
        </footer>
    }
}
export default Footer