import ViewerQueries from './ViewerQueries';
import StartRoute from './routes/start'
import ReviewsRoute from './routes/reviews'
import AuthPage from './components/auth'
import App from './routes/app'
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
                path: 'auth',
                components: {
                    children: AuthPage,
                    rightBlock: "hide"
                }
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