import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment'
import {Link} from 'react-router-dom'


/**
 * COMPONENT
 */
export const UserHome = props => {
  const { firstName } = props;

  const dateCreated = props.user.createdAt
  const date = new Date(dateCreated)
  const formattedDate = moment(date).format('dddd MMMM D Y')
  let [day, month, dayNumber, year] = formattedDate.split(' ')

  return (
    <div className='container'>
      <h3>Welcome, {firstName}</h3>
      <span>You've been a customer since: {day}, {month} {dayNumber}, {year}. </span>
      <span>Thank you for liking us!</span>
      <Link to={`/users/${props.user.id}`}><p>Link to view and review your past orders</p></Link>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    firstName: state.user.firstName,
    user: state.user
  };
};

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string,
};
