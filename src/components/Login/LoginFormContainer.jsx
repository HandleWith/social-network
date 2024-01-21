import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux"
import { loginUser } from "./../../redux/auth-reducer";

const LoginFormContainer = (props) => {
  return (
    <div>
      <LoginForm loginUser={props.loginUser}/>
    </div>
  );
};


export default connect(null, {loginUser})(LoginFormContainer);
