import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

import { fetchCurrentUser } from './actions';
import Header from './components/Header';

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

App.propTypes = {
  route: PropTypes.any, // eslint-disable-line
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};
