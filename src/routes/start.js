import * as Relay from 'react-relay'
import StartComponent from './../components/start'
export default Relay.createContainer(StartComponent,{
    fragments:{
        viewer:()=>Relay.QL`      fragment on Viewer {
        bloodstations(first:10){
            edges{
                node{
                    id
                    name
                    address
                }
            }
        }
    }
        `
    }}
)