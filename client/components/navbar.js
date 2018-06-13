import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import './navbar.css';

const Header = ({ handleClick, isLoggedIn, isAdmin }) => (
  <div className="nav">
    <div className="nav-header">
      <div className="nav-title">ClownTown</div>
    </div>
    <div className="nav-btn">
      <label htmlFor="nav-check">
        <span />
        <span />
        <span />
      </label>
    </div>
    <input type="checkbox" id="nav-check" />
    <div className="navbar-link">
      {isLoggedIn ? (
        <div className="inner-links">
          {isAdmin ? (
            <div style={{ marginRight: '10px' }}>
              <Link
                to="/orders"
                style={{
                  fontSize: '18px',
                  marginRight: '5px',
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
                  fontSize: '18px',
                  textDecoration: 'none',
                  color: 'gray',
                  fontWeight: 'bold',
                }}
              >
                Users
              </Link>
            </div>
          ) : (
            <div />
          )}
          {/* The navbar will show these links after you log in */}
          <div>
            <Link
              to="/home"
              style={{
                fontSize: '18px',
                marginRight: '5px',
                textDecoration: 'none',
                color: 'gray',
                fontWeight: 'bold',
              }}
            >
              Home
            </Link>
            <a
              href="#"
              style={{
                fontSize: '18px',
                textDecoration: 'none',
                color: 'gray',
                fontWeight: 'bold',
              }}
              onClick={handleClick}
            >
              Logout
            </a>
          </div>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link
            to="/login"
            style={{
              fontSize: '18px',
              textDecoration: 'none',
              color: 'gray',
              fontWeight: 'bold',
            }}
          >
            Login
          </Link>
          <Link
            to="/signup"
            style={{
              fontSize: '18px',
              textDecoration: 'none',
              color: 'gray',
              fontWeight: 'bold',
            }}
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
    </div>
  </div>
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
