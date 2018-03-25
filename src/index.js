import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';

import createStore from './helpers/createStore';
import renderer from './helpers/renderer';

import Routes from './client/Routes';

const app = express();

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator(opts) {
    // eslint-disable-next-line
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  },
}));

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : Promise.resolve(null);
  }).map(promise => new Promise(resolve => promise.then(resolve).catch(resolve)));

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }
    return res.send(content);
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000!'); // eslint-disable-line
});
