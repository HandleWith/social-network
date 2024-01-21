import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToProps = (state) => ({
  isAuthorized: state.auth.isAuthorized,
});

const withAuthRedirect = (Component) => {
  return connect(mapStateToProps)((props) => {
    if (!props.isAuthorized) {
      return <Navigate to="/login" />;
    }
    return <Component {...props} />;
  })
};

export default withAuthRedirect;
