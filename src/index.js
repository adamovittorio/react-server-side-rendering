import 'babel-polyfill';
import express from 'express';

import createStore from './helpers/createStore';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore();

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening on port 3000!'); // eslint-disable-line
});
