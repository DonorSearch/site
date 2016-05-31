import * as React from 'react'
import * as Relay from 'react-relay'
import Helmet from "react-helmet";
import StartComponent from './../components/start'


class StartRoute extends React.Component {
    render() {
        return <div>
            <Helmet title="DonorSearch. Доноры крови: поиск, учет кроводач, рекомендации, противопоказания, пункты сдачи крови, связь через социальные сети.s" />
            <StartComponent viewer={this.props.viewer} />
        </div>
    }
}
StartRoute.propTypes = {
    viewer: React.PropTypes.object
}
export default Relay.createContainer(StartRoute, {
    fragments: {
        viewer: () => Relay.QL`      
            fragment on Viewer {
                recipientReviews(first:6, orderBy:"random"){
                    edges{
                        node{
                            id
                            vkontaktePostId
                            smallText
                            imageUrl(width:100, height:100)
                        }
                    }
                }
            }`
    }
})