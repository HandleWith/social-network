import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { authUser, logout } from "./../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authUser()
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuthorized: state.auth.isAuthorized,
    authUserProfile: state.auth.authUserProfile,
  };
};

export default connect(mapStateToProps, { authUser, logout })(HeaderContainer);
