import * as React from 'react'
import Header from './header'
import Footer from './footer'
class Layout extends React.Component {
    render() {
        return <div>
            <Header />
            <div style={{ minHeight: "1000px" }}>
                <div className="container">{this.props.children}</div>
            </div>
            <Footer />
        </div>
    }
}
export default Layout