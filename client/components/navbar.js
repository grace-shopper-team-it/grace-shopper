import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Header = ({ handleClick, isLoggedIn, isAdmin }) => (
  <nav className="navbar navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
    <a className="navbar-brand" href="#">
      ClownTown
    </a>
    {isLoggedIn ? (
      <div>
        {isAdmin ? (
          <span>
            <Link
              to="/orders"
              style={{
                textDecoration: 'none',
                color: 'gray',
                fontWeight: 'bold',
              }}
            >
              Orders
            </Link>
            <Link
              to="/users"
              style={{
                textDecoration: 'none',
                color: 'gray',
                fontWeight: 'bold',
              }}
            >
              Users
            </Link>
          </span>
        ) : (
          <span />
        )}
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
        <i
          className="fas fa-shopping-cart"
          style={{ color: 'red', marginLeft: '2px' }}
        />
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
    isAdmin: state.user.isAdmin,
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
  isAdmin: PropTypes.bool.isRequired,
};
