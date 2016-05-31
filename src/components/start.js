import * as React from 'react'
import {Link} from 'react-router'
class Start extends React.Component {
    render() {
        return <div>
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-interval="10000">
                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">

                    <div className="item active">
                        <img data-name="slider_img1" src="" style={{ backgroundRepeat: "no-repeat", backgroundPosition: "left center", width: "1150px !important", height: "500px !important" }} alt="..." />
                        <div className="carousel-caption">
                            <div style={{ textAlign: "justify", backgroundColor: "rgb(5, 34, 107)", opacity: "0.85", padding: "20px", fontSize: "16px", marginLeft: "282px", width: "350px", position: "absolute", marginTop: "-380px" }}>
                                <p>Становитесь донорами вместе с нами, даже если вы еще не сдавали кровь ни разу, получайте бонусы от партнеров проекта и делитесь достижениями с друзьями!</p>
                                <p><a  className="btn btn-lg btn-info" style={{ width: "100%" }} href="/reg_start">Стать донором</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="item">

                        <img src="" data-name="slider_img2" style={{ backgroundRepeat: "no-repeat", backgroundPosition: "right center", width: "1150px", height: "500px" }} alt="..." />

                        <div className="carousel-caption">
                            <div style={{ textAlign: "justify", backgroundColor: "rgb(151, 0, 0)", opacity: "1", padding: "20px", fontSize: "16px", width: "286px", height: "500px", position: "absolute", marginTop: "-449px" }}>
                                <img src="/img/logo_white_500_500.png" style={{ width: "150px", marginBottom: "20px", marginLeft: "47px" }} />
                                <p>&nbsp; </p>
                                <p>DonorSearch - уникальный IT-ресурс для доноров крови в СНГ.</p>
                                <p>Ведите учет своих кроводач, узнавайте, где именно не хвататет запасов крови и компонентов крови.</p>
                                <p>&nbsp; </p>
                                <p><a  className="btn btn-lg btn-default" style={{ width: "100%" }} href="/reg_start">Присоединиться</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img data-name="slider_img3" style={{ backgroundRepeat: "no-repeat", backgroundPosition: "center center", width: "1150px", height: "500px" }} alt="..." />
                        <div className="carousel-caption">
                            <div style={{ textAlign: "justify", backgroundColor: "rgb(88, 156, 0)", opacity: "0.85", padding: "20px", fontSize: "16px", marginLeft: "-59px", width: "350px", position: "absolute", marginTop: "-402px" }}>
                                <p>Становитесь волонтером проекта и помогайте спасать жизни вместе с нами.</p>
                                <p>Вместе делаем одно хорошее дело!</p>
                                <p><a  className="btn btn-lg btn-success" style={{ width: "100%" }} href="/volunteers">Стать волонтером проекта</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                </a>
                <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                </a>
            </div>


            <div style={{ height: "1px", clear: "both" }}></div>
            <div style={{ height: "30px" }}></div>
            <div className="hr" style={{ height: "10px" }}></div>

            <div style={{ textAlign: "justify", marginTop: "30px" }}>
                <div style={{ float: "left", width: "30%" }}>
                    <h1>Я - донор!</h1>
                    <p style={{ minHeight: "150px" }}>DonorSearch - это удобный сервис, позволяющий не только вести учет и планирование своих кроводач, но и узнавать, где именно и в какие дни есть особая нехватка донорской крови или компонентов крови в вашем городе.
                        А особая программа привилегий для доноров является дополнительным приятным бонусом к спасению жизней.</p>
                    <div style={{ height: "20px" }}></div>
                    <a href="/reg_start" className="superbutton">Зарегистрироваться</a>
                </div>
                <div style={{ float: "left", width: "5%", height: "10px" }}></div>
                <div style={{ float: "left", width: "30%" }}>
                    <h1>Ищу донора</h1>
                    <p style={{ minHeight: "150px" }}>Чтобы найти донора - выберите страну и город, а также группу и резус-фактор необходимой донорской крови.В случае, когда кровь не важна выберите пункт - группа крови любая.Для автоматического приглашения доноров создайте карточку реципиента - наша система будет работать вместе с вами!</p>
                    <div style={{ height: "20px" }}></div>
                    <a  className="superbutton" href="/search">Начать поиск донора</a>
                </div>
                <div style={{ float: "left", width: "5%", height: "10px" }}></div>
                <div style={{ float: "left", width: "30%" }}>
                    <h1>Волонтеру</h1>
                    <p style={{ minHeight: "150px" }}>Проект DonorSearch создан и спасает жизни благодаря активности граждан, которые готовы поддерживать социально-значимые инициативы.Мы будем рады каждому волонтеру - не важно сколько Вам лет, где живете и являетесь ли Вы донором.Главное, что даже 5 минут в день могут помочь тем, кто в этом нуждается.Вместе делаем одно хорошее дело!</p>
                    <div style={{ height: "20px" }}></div>
                    <a   className="superbutton" href="/volunteers">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Участвовать&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </a>
                </div>
            </div>
            <div style={{ height: "1px", clear: "both" }}></div>
            <div style={{ height: "30px" }}></div>
            <div className="hr" style={{ height: "10px" }}></div>

            <div style={{ marginTop: "30px" }}>

                <div>
                    <h1>О нас</h1>

                    <div style={{ width: "100%" }}>
                        <div style={{ float: "left", width: "50%" }}>
                            <p style={{ marginTop: "6px" }}>Мы - <strong>не государственный</strong> некоммерческий проект, созданный молодыми людьми из России.Ежедневно, благодаря проекту DonorSearch, несколько новых доноров сдают кровь, а значит, несколько новых людей получают шанс на выздоровление.</p>
                            <p><strong>Каждый день тысячи людей нуждаются в донорской крови.Помогите нам спасти их!</strong></p>
                            <p>Ежегодно 1, 5 млн людей требуются переливания крови, и в России показатели донорства только вполовину удовлетворяют нужды здравоохранения.</p>
                            <p>По статистике, каждый третий человек в течение жизни сталкивается с необходимостью переливания крови!</p>
                            <p>За последний год мы помогли более 2000 больным.</p>
                            <p><strong>Вместе делаем одно хорошее дело!</strong></p>

                            <a  className="btn btn-danger btn-lg" style={{ width: "100%", marginTop: "20px" }} href="/help">Помочь проекту</a>
                        </div>
                        <div style={{ float: "left", width: "45%", marginLeft: "5%" }}>
                            <h2 style={{ fontSize: "18px", marginTop: "0px" }}>Репортаж "Первого канала" о нас </h2>
                            <iframe width="400px" height="300px" src="//www.youtube.com/embed/E8I9YekdmaY" frameBorder="0" allowFullScreen="true"></iframe>
                        </div>
                    </div>

                    <div className="clearfix"></div>
                </div>
                <div style={{ height: "1px", clear: "both" }}></div>
                <div style={{ height: "1px", clear: "both" }}></div>
            </div>
            
            
            <div style={{marginTop:"30px"}}>
                <div>
                    <h1 style={{float:"left"}}>Отзывы</h1>
                    <Link className="bannervideolink" style={{width: "257px",float:"right",marginTop:"5px"}} to="/reviews">Смотреть все отзывы</Link>
                </div>     
                <div className="clearfix"></div>
                <div style={{height:"1px",marginTop:"-5px"}}></div>
                <div className="clearfix"></div>
                <div className="reviews" data-name="reviews">
                {this.props.viewer.recipientReviews.edges.map(({node})=>{
                     return <div className="item" key={node.id}>
                        <img data-name="photo" src={node.imageUrl} />
                        {/* eslint-disable react/no-danger */}
                        <span data-name="text" dangerouslySetInnerHTML={{__html:node.smallText}}></span>
                        {/* eslint-enable */}
                        <br /><a target="_blank" href={"http://vk.com/topic-21179173_24022855?post=" + node.vkontaktePostId } data-name="link">Читать отзыв</a>
                    </div>
                })}        
                    <div className="clearfix"></div>
                </div>
                <div style={{ height: "1px", clear: "both" }}></div>
                
                <div style={{ height: "1px", clear: "both" }}></div>   	
            </div> 
            
            
            <div style={{ height: "1px", clear: "both" }}></div>    
       
            <div className="hr" style={{height:"10px"}}></div>  
            
        </div>
    }
}
Start.propTypes={
    viewer:React.PropTypes.object.isRequired
}
export default Start