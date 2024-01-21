import React from "react";
import classes from "./Header.module.css";
import logo from "./../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import userPhoto from "./../../assets/images/user.png";
import logout from "./../../assets/images/exit.svg";

const Header = (props) => {
  let isAuthorized = props.isAuthorized;
  let authUserPhoto = userPhoto;
  /* if(isAuthorized) {
      authUserPhoto = props.authUserProfile.photos.small !== null
      ? props.authUserProfile.photos.small
      : userPhoto
  }*/
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <img alt="logo" src={logo} className={classes.img}></img>
        <div className={classes.login_wrapper}>
          {isAuthorized && (
            <div className={classes.user_img_wrapper}>
              <img
                className={classes.user_img}
                src={authUserPhoto}
                alt="user_photo"
              />
            </div>
          )}
          <div className={classes.user_name_wrapper}>
            {isAuthorized ? (
              <div>{props.login}</div>
            ) : (
              <NavLink to={"/login"}>Login</NavLink>
            )}
          </div>
          {isAuthorized && (
            <div onClick={props.logout} className={classes.logout_wrapper}>
              <img alt="logout" src={logout} className={classes.logout} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
