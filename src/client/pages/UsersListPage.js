import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchUsers } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  head = () => {
    return (
      <Helmet>
        <title> {`${this.props.users.length} Users loaded`} </title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        {this.head()}
        Here&#39;s big list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  fetchUsers: PropTypes.func.isRequired,
};

UsersList.defaultProps = {
  users: [],
};

const mapStateToProps = ({ users }) => ({
  users,
});

const loadData = (store) => {
  return store.dispatch(fetchUsers());
};

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
};
