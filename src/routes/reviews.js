import * as React from 'react'
import * as Relay from 'react-relay'
import Helmet from "react-helmet";
import ReviewsComponent from './../components/reviews'

class ReviewsRoute extends React.Component {
    render() {
        return <div>
            <Helmet title="Отзывы о проекте DonorSearch" />
            <ReviewsComponent {...this.props} />
        </div>
    }
}
ReviewsRoute.propTypes = {
    viewer: React.PropTypes.object,
    relay: React.PropTypes.object
}
export default Relay.createContainer(ReviewsRoute, {
    initialVariables: {
        first: 10,
        step: 10
    },
    fragments: {
        viewer: () => Relay.QL`      
            fragment on Viewer {
                recipientReviews(first:$first){
                    pageInfo{
                        hasNextPage
                    }
                    edges{
                        node{
                            id
                            userFirstName
                            userLastName
                            userVkontakteId
                            timestamp                            
                            vkontaktePostId
                            text
                            imageUrl(width:100, height:100)
                        }
                    }
                }
            }`
    }
})