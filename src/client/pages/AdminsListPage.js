import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';

class AdminsList extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map((admin) => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }

  render() {
    return (
      <div>
        Protected list of admins:
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

AdminsList.propTypes = {
  admins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  fetchAdmins: PropTypes.func.isRequired,
};

AdminsList.defaultProps = {
  admins: [],
};

const mapStateToProps = ({ admins }) => ({
  admins,
});

export default {
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
  component: connect(mapStateToProps, { fetchAdmins })(
    requireAuth(AdminsList),
  ),
};
