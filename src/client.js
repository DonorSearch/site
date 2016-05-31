import IsomorphicRelay from 'isomorphic-relay';
import IsomorphicRouter from 'isomorphic-relay-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, match, Router } from 'react-router';
import Relay from 'react-relay';
import routes from './routes';
const environment = new Relay.Environment();
const networkLayer = new Relay.DefaultNetworkLayer('http://localhost:4000/graphql',{});
environment.injectNetworkLayer(networkLayer);

const data = JSON.parse(document.getElementById('preloadedData').textContent);

IsomorphicRelay.injectPreparedData(environment, data);

const rootElement = document.getElementById('root');

match({ routes, history: browserHistory }, (error, redirectLocation, renderProps) => { 
  IsomorphicRouter.prepareInitialRender(environment, renderProps).then(props => {
    ReactDOM.render(<Router {...props} />, rootElement);
  });
});