import ViewerQueries from './ViewerQueries';
import * as React from 'react'
import * as Relay from 'react-relay'
import StartRoute from './routes/start'
import Layout from './components/layout'
import {Link} from 'react-router';
class Test extends React.Component{
    render(){
        return <div>test</div>
    }
}


export default [
    {
        path:'/',
        component:Layout,
        indexRoute: {
            component: StartRoute,
            queries: ViewerQueries
        },       
        childRoutes: [
            {
                path: 'test',
                component: Test
            },
        ]         
    }
]