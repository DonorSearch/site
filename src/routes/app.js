import * as React from 'react'
import * as Relay from 'react-relay'
import App from './../components/app'
import Header from './../components/header'

export default Relay.createContainer(App, {
    fragments: {
        viewer: () => Relay.QL`      fragment on Viewer {
        token
        ${Header.getFragment('viewer')}
        }
        `
    }
}
)