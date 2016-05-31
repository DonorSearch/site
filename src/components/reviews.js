import * as React from 'react'
class Reviews extends React.Component {
    render() {
        return <div>
            <h1>Отзывы о нашем проекте</h1>
            <div className="container" style={{ float: "left", width: "700px" }}>
                {this.props.viewer.recipientReviews.edges.map(({node}) => {
                    return <div key={node.id} className="thumbnail" style={{ overflow: "hidden", padding: "10px" }}>
                        <div>
                            <a style={{ marginLeft: "2%" }} className="author" href={"http://vk.com/id" + node.userVkontakteId} target="_blank" >{node.userFirstName} {node.userLastName}</a>
                            <a data-name="link" target="_blank"  href={"http://vk.com/topic-21179173_24022855?post=" + node.vkontaktePostId}><span style={{ fontSize: "x-small", fontStyle: "italic", float: "right" }} id="date">{node.timestamp}</span></a>
                        </div>
                        <img className="img" style={{ borderRadius: "500px !important", display: "inline", float: "left", margin: "10px" }} data-name="img" src={node.imageUrl}/>

                        <br />
                        {/* eslint-disable react/no-danger */}
                        <span data-name="message" style={{ marginTop: "1%" }} className="message" dangerouslySetInnerHTML={{ __html: node.text }}></span>
                        {/* eslint-enable */}
                    </div>
                }) }
            </div>
            {this.props.viewer.recipientReviews.pageInfo.hasNextPage ?
                <div className="col-md-9 col-sm-9 col-sm-offset-2 col-md-offset-2">
                    <a onClick={() => {
                        this.props.relay.setVariables({ first: this.props.relay.variables.first + this.props.relay.variables.step })
                    } } className="btn btn-primary col-md-2 col-sm-2">Еще отзывы</a>
                </div> : null}
        </div>
    }
}
Reviews.propTypes = {
    viewer: React.PropTypes.object.isRequired,
    relay: React.PropTypes.object
}
export default Reviews