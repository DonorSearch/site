import IsomorphicRouter from 'isomorphic-relay-router';
import path from 'path';

import ReactDOMServer from 'react-dom/server';
import { match } from 'react-router';
import Relay from 'react-relay';
import routes from './routes';
import Helmet from 'react-helmet';
import Cookies from 'cookies'
const GRAPHQL_URL = `http://localhost:4000/graphql`;



class NetworkLayer extends Relay.DefaultNetworkLayer{
    sendQueries(queryRequests){
        this._init.headers={
            Cookie: "token=" + queryRequests[0]._query.__variables__['token']
        }
        return super.sendQueries(queryRequests);        
    }
}
const networkLayer = new NetworkLayer(GRAPHQL_URL,{});

export default (req, res, next) => {
    var cookies = new Cookies(req, res)
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            next(error);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            
            renderProps.params['token'] = req.cookies["token"] ||  req.cookies["sid"] || ""
            renderProps.params['token'] = encodeURIComponent(renderProps.params['token'])
            IsomorphicRouter.prepareData(renderProps, networkLayer).then(render, next);
        } else {
            res.status(404).send('Not Found');
        }

        function render({ data, props }) {
            try{
                const reactOutput = ReactDOMServer.renderToString(IsomorphicRouter.render(props));
                let helmet = Helmet.rewind();
                cookies.set("token",data[0].response.viewer.token,{
                    domain:".donorsearch.org",
                    expires:new Date( (+new Date) + 86400*365*10*1000 ),
                    maxAge:86400*365*10*1000
                })
                res.render(path.resolve(__dirname, '..', 'views', 'index.ejs'), {
                    preloadedData: data,
                    reactOutput,
                    title:helmet.title
                });
            }catch(e){
                console.error(e)
                next(e)
            }            
        }
    });
};