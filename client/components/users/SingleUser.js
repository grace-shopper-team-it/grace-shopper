import React from 'react';
import { connect } from 'react-redux';
import { getUserInfoThunk } from '../../store/user.admin';
import UserInfo from './UserInfo';
import AdminActions from './AdminActions';
import SingleOrderPage from '../orders/SingleOrderPage';

class SingleUser extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.id;
    this.props.fetchUser(userId);
  }
  render() {
    const { currentUser, selectedUser } = this.props;
    console.log('selectedUser:', selectedUser);

    const adminStatus = selectedUser.isAdmin ? 'Admin User' : 'Regular User';
    if (!selectedUser.id) return <div>LOADING...</div>;
    return (
      <div className="container">
        <UserInfo user={selectedUser} />
        <h3>Order History</h3>
        {selectedUser.orders.map(order => {
          return <SingleOrderPage key={order.id} orderId={order.id} />;
        })}
        {currentUser.isAdmin && (
          <div>
            <p>
              User Type: <strong>{adminStatus}</strong>
            </p>
            <AdminActions selectedUser={selectedUser} />
          </div>
        )}
      </div>
    );
  }
}

const mapState = state => {
  return {
    currentUser: state.user,
    selectedUser: state.userAdmin.selectedUser,
  };
};

const mapDispatch = dispatch => {
  return {
    fetchUser: userId => dispatch(getUserInfoThunk(userId)),
  };
};

export default connect(
  mapState,
  mapDispatch
)(SingleUser);
