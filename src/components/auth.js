import * as React from 'react'
import * as Relay from 'react-relay'
class AuthBySocnetworkMutation extends Relay.Mutation {
    getMutation() {
        return Relay.QL`mutation {authBySocnetwork}`;
    }
    getVariables() {
        return {
            socnetwork: this.props.socnetwork,
            checkToken: this.props.checkToken,
            userId: this.props.userId,
            appId: 1,
            secret: this.props.secret,
        };
    }
    getFatQuery() {
        return Relay.QL`fragment on LikeStoryPayload {}`
    }
    getConfigs() {
        return []
    }
}
//TODO ПРИВЯЗАТЬ ОТВЕТ К СОЦСЕТИ
class Auth extends React.Component {

    constructor(props) {
        super(props)
        this.onMessageBind = this.onMessage.bind(this)
        this.callback_auth = 'donorsearch_auth_callback' + (+new Date);
    }
    componentDidMount() {
        window.addEventListener("message", this.onMessageBind)
    }
    componentWillUnmount() {
        window.removeEventListener("message", this.onMessageBind)
    }
    onMessage(e) {
        if (e && e.data && e.data.service && e.data.service == 'donorsearch' && e.data.type == "auth") {
            this.callbackAuth(e.data.data);
        }
    }
    callbackAuth(data) {
        try {
            data = JSON.parse(data)
            switch (data.status) {
                case "success":
                    this.props.relay.commitUpdate(
                        new AuthBySocnetworkMutation({
                            socnetwork: this.props.socnetwork,
                            checkToken: this.props.checkToken,
                            userId: this.props.userId,
                            appId: 1,
                            secret: this.props.secret,
                        })
                    );
                    //this.context.router.push("/profile")
                    console.log(data)
                    break
                default:
                    if (data.error_type == 'user_not_registered') {

                    }
                    else if (data.error_type == 'not_finish_registered') {

                    }

            }
        } catch (e) {
            //TODO show error
        }
    }
    auth(socnetwork, e) {

        e.preventDefault()
        var secret = (+new Date);
        console.log("secret", secret)
        window[this.callback_auth] = this.callbackAuth.bind(this)
        var link = 'https://donorsearch.org/popup/auth?for=auth&secret=' + secret + '&app_id=1&socnetwork=' + socnetwork + '&callback=' + this.callback_auth;
        var left = (screen.width / 2) - (500 / 2);
        var top = (screen.height / 2) - (600 / 2);
        window.open(link, '_blank', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no,width=500,height=600,left=' + left + ',top=' + top);

    }
    render() {
        return <div className="span9" style={{ outline: "0px dotted gray" }}>
            <h2 style={{ marginTop: "-8px" }}>Авторизация</h2>
            <div className="error" style={{ display: "none" }}>
                <p>Не найден зарегистрированный пользователь с этим аккаунтом соцсети</p>
                <hr />
            </div>
            <div>
                <a href="#" onClick={this.auth.bind(this, "Vkontakte") } className="ico"><img src="/img/ico_Vkontakte.png" width="40" height="40" title="Авторизация через ВКонтакте" /></a>&nbsp; &nbsp; &nbsp;
                <a href="" rel="nofollow" className="ico" data-sn="Facebook"><img src="/img/ico_Facebook.png" width="40" height="40" title="Авторизация через Facebook" /></a>&nbsp; &nbsp; &nbsp;
                <a href="" rel="nofollow" className="ico" data-sn="Mailru"><img src="/img/ico_Mailru.png" width="40" height="40" title="Авторизация через Mail.ru" /></a>&nbsp; &nbsp; &nbsp;
                <a href="" rel="nofollow" className="ico" data-sn="OK"><img src="/img/ico_OK.png" width="40" height="40" title="Авторизация через Одноклассники" /></a>&nbsp; &nbsp; &nbsp;
                <a href="" rel="nofollow" className="ico" data-sn="Twitter"><img src="/img/ico_Twitter.png" width="40" height="40" title="Авторизация через Twitter" /></a>&nbsp; &nbsp; &nbsp;
            </div>
            <div  style={{ display: "block" }}>
                <hr />
                или
                <br />
                <br />
                <a  className="btn btn-primary" href="/reg_start"><span className="glyphicon glyphicon-tint"></span> Регистрация донора (даже если вы еще не сдавали) </a>
                &nbsp;
                <a  className="btn btn-info" href="/volunteers/reg"><span className="glyphicon glyphicon-heart-empty"></span> Регистрация волонтера (если вы не можете сдавать кровь) </a>
            </div>
        </div>
    }
}
Auth.contextTypes = {
    router: React.PropTypes.object.isRequired
}
Auth.propTypes = {
    relay: React.PropTypes.object.isRequired
}
export default Auth