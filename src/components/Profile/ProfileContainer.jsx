import React from "react";
import Profile from "./Profile";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profile-reducer";
import { connect } from "react-redux";
import withRouter from "./../Hoc/WithRouter";
import withAuthRedirect from "./../Hoc/WithAuthRedirect"
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 30551;
    }
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }
  render() {
    return <Profile {...this.props} updateUserStatus={this.props.updateUserStatus}/>;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
