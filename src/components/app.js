import * as React from 'react'
import Header from './header'
import Footer from './footer'
class App extends React.Component {
    render() {
        const showRightBlock = this.props.rightBlock.type == "show" ? true : false
        return <div>
            <Header viewer={this.props.viewer} />
            <div style={{ minHeight: "1000px" }}>
                <div className="container">
                    <div data-name="main" style={{ width: "100%", float: "left", paddingRight: showRightBlock ? "300px !important" : "0px !important", paddingBottom: "30px", paddingTop: "30px" }} className="pdd">
                        <div style={{ minWidth: "600px" }}>
                            <div style={{ clear: "both", height: "0px" }}></div>
                            {React.cloneElement(this.props.children, {}) }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    }
}
App.propTypes = {
    viewer: React.PropTypes.object.isRequired,
    children: React.PropTypes.node.isRequired,
    rightBlock: React.PropTypes.node
}
export default App