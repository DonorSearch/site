import * as React from 'react'
class Reviews extends React.Component {
    render() {
        return <div className="container" style={{ float: "left", width: "700px" }}>
            <h1>Отзывы о нашем проекте</h1>
            {this.props.viewer.recipientReviews.edges.map(({node}) => {
                return <div className="thumbnail" style={{ overflow: "hidden", padding: "10px" }}>
                    <div>
                        <a style={{ marginLeft: "2%" }} className="author" href="http://vk.com/id364164145" target="_blank" >{node.userFirstName} {node.userLastName}</a>
                        <a data-name="link" target="_blank"  href={"http://vk.com/topic-21179173_24022855?post=" + node.vkontaktePostId}><span style={{ fontSize: "x-small", fontStyle: "italic", float: "right" }} id="date">{node.timestamp}</span></a>
                    </div>
                    <img className="img" style={{ borderRadius: "500px !important", display: "inline", float: "left", margin: "10px" }} data-name="img" src={node.imageUrl}/>

                    <br />
                    {/* eslint-disable react/no-danger */}
                    <span data-name="message" style={{ marginTop: "1%" }} className="message" dangerouslySetInnerHTML={{ __html: node.text }}></span>
                    {/* eslint-enable */}
                </div>
            }) }
            <div className="col-md-9 col-sm-9 col-sm-offset-2 col-md-offset-2">
                <a id="more_reviews" className="btn btn-primary col-md-2 col-sm-2">Еще отзывы</a>
            </div>
        </div>
    }
} 
Reviews.propTypes = {
    viewer: React.PropTypes.object.isRequired
}
export default Reviews