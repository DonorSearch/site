import ViewerQueries from './ViewerQueries';
import * as React from 'react'
import StartRoute from './routes/start'
import ReviewsRoute from './routes/reviews'
import App from './routes/app'
class Test extends React.Component {
    render() {
        return <div>test</div>
    }
}

export default [
    {
        path: '/',
        /*components: { app: App },
        queries: { app: ViewerQueries },*/
        component: App,
        queries: ViewerQueries,
        prepareParams: (_, context) => {
            return {
                token: context.params.token || ""
            }
        },
        indexRoute: {
            components: {
                children: StartRoute,
                rightBlock: "hide"
            },
            queries: { children: ViewerQueries }
        },
        childRoutes: [
            {
                path: 'test',
                component: Test
            },
            {
                path: 'reviews',
                components: {
                    children: ReviewsRoute,
                    rightBlock: "show"
                },
                queries: { children: ViewerQueries }
            }
        ]
    }
]