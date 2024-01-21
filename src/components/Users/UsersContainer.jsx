import React from "react";
import { connect } from "react-redux";
import { getUsers, follow, unFollow } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChange = (pageNum) => {
    this.props.getUsers(pageNum, this.props.pageSize)
  };

  render() {
    return (
      <>
        <Preloader isFeching={this.props.isFeching}/>
        <Users {...this.props} onPageChange={this.onPageChange}/>
      </>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFeching: state.usersPage.isFeching,
    followingInProgress: state.usersPage.followingInProgress
  };
};

export default connect(mapStateToProps, { getUsers, follow, unFollow })(UsersContainer);
