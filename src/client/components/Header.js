import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ auth }) => {
  console.log('My auth status is', auth);
  const authButton = auth
    ? <a href="/api/logout"> Logout </a>
    : <a href="/api/auth/google"> Login </a>;

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo"> React SSR </Link>
        <ul className="right">
          <li><Link to="/users"> Users </Link></li>
          <li><Link to="/admins"> Admins </Link></li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  // eslint-disable-next-line
  auth: PropTypes.any,
};

Header.defaultProps = {
  auth: false,
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Header);
