import * as React from 'react'

class Header extends React.Component {
    render() {
        return <header style={{ minWidth: "770px" }}>
            <div className="container">
                <div className="navbar-header">
                    <img src="/img/logo_white.png" style={{ height: "30px", float: "left", marginTop: "8px", marginLeft: "9px" }} />
                    <a  className="navbar-brand" href="/">DonorSearch</a>
                </div>
                <nav className="collapse navbar-collapse bs-navbar">
                    <ul className="nav navbar-nav">
                        <li><a href="#"><span style={{ fontSize: "19px", color: "rgb(226, 210, 103)" }} className="glyphicon glyphicon-thumbs-up"></span></a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">О проекте <b className="caret"></b></a>
                            <ul className="dropdown-menu">
                                <li><a href="/presentation">Презентация проекта</a></li>
                                <li><a href="/team">Команда</a></li>
                                <li><a href="/feedback">Контакты</a></li>

                                <li><a href="/statistics">Наши результаты</a></li>
                                <li><a href="/help">Помочь проекту</a></li>
                                <li className="divider"></li>
                                <li><a href="/reviews">Отзывы о проекте</a></li>
                                <li><a href="/media">СМИ, конкурсы, гранты</a></li>
                                <li><a href="/partners">Партнеры</a></li>
                                <li><a href="/thanks">Благодарности</a></li>
                                <li className="divider"></li>
                                <li><a href="/shop">Наш магазин</a>
                                </li>
                                <li className="divider"></li>
                                <li><a href="/legal-details">Реквизиты НКО</a></li>
                                <li ><a href="/rules">Пользовательское соглашение</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Донорам <b className="caret"></b></a>
                            <ul className="dropdown-menu">
                                <li><a href="/reg_start">Регистрация</a></li>
                                <li className="divider"></li>
                                <li><a href="/donation">О донорстве</a></li>
                                <li><a href="/donors/how">Как сдать кровь?</a></li>
                                <li><a href="/bloodstations">Пункты сдачи крови</a></li>
                                <li><a href="/contraindications">Противопоказания</a></li>
                                <li><a href="/donation/recommendations">Рекомендации</a></li>
                                <li className="divider"></li>
                                <li><a href="/donors/podium"><span className="glyphicon glyphicon-star"></span> Доска почета</a></li>
                                <li className="divider"></li>
                                <li><a  href="/donors/achievements">Достижения</a></li>
                                <li style={{ display: "none" }}><a href="/donors/bonuses">Бонусная программа</a></li>
                                <li><a href="/rules/donor">Правила пользования</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Поиск доноров<b className="caret"></b></a>
                            <ul className="dropdown-menu">
                                <li><a href="/search/about">Что это такое?</a></li>
                                <li><a href="/search?tab=auto">Автоматический поиск</a></li>
                                <li><a href="/search?tab=manual">Ручной поиск</a></li>
                                <li className="divider"></li>
                                <li><a href="/recipients/search">Сейчас ищут доноров</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a  style={{ color: "rgb(255, 214, 0) !important" }} href="/help?from=ds_topmenu">
                                <span className="glyphicon glyphicon-heart"></span>&nbsp;Поддержать проект</a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                    </ul>
                    <ul className="nav navbar-nav navbar-right" data-frame="MainBox/UserAuthTop">
                        <li data-name="menu_auth" className="dropdown">
                            <img src="https://st.drsh.org/i/NjkzMzg/ab7d126a8174681_35_35.jpg" data-name="user_avatar" />
                        </li>
                        <li data-name="menu_auth" className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <span data-name="user_name" title="Виталий" checked="checked">Архипов Виталий</span> <b className="caret"></b>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a data-name="link_profile_show" href="/users/id12529217">Моя страница</a></li>
                                <li className="divider"></li>
                                <li><a href="/profile?tab=personal">Мой профиль</a></li>
                                <li><a href="/profile?tab=messages">Мои сообщения</a></li>
                                <li><a href="/profile?tab=contacts">Мои контакты</a></li>
                                <li className="divider"></li>
                                <li className="dropdown-header divider-header"><span>Донор</span></li>
                                <li><a href="/profile?tab=donations">Мои кроводачи</a></li>
                                <li><a href="/profile?tab=donor_notifies">Настройки уведомлений</a></li>
                                <li className="divider"></li>
                                <li><a href="/logout">Выход</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    }
}
export default Header