import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
// import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = ({ handleClick, isLoggedIn }) => (
  <nav className="navbar navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
    <a className="navbar-brand" href="#">
      ClownTown
    </a>
    {isLoggedIn ? (
      <div>
        {/* The navbar will show these links after you log in */}
        <Link
          to="/home"
          style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bold' }}
        >
          Home
        </Link>
        <a
          href="#"
          style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bold' }}
          onClick={handleClick}
        >
          Logout
        </a>
      </div>
    ) : (
      <div>
        {/* The navbar will show these links before you log in */}
        <Link
          to="/login"
          style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bold' }}
        >
          Login
        </Link>
        <Link
          to="/signup"
          style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bold' }}
        >
          Sign Up
        </Link>
      </div>
    )}
    <div>
      <Link
        to="/allProducts"
        style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bold' }}
      >
        View All Products
      </Link>
      <Link
        to="/cart"
        style={{ textDecoration: 'none', color: 'gray', fontWeight: 'bold' }}
      >
        View My Cart
      </Link>
    </div>
  </nav>
);

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(
  mapState,
  mapDispatch
)(Header);

/**
 * PROP TYPES
 */
Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
