import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const SelectLink = () => {
    return (
      NavLink => NavLink.isActive ? classes.active : ""
    )
  }

  return (
    <nav className={classes.navbar}>
      <ul className={classes.menu}>
        <li>
          <NavLink to="profile" className={SelectLink()}>Profile</NavLink>
        </li>
        <li>
          <NavLink to="dialogs" className={SelectLink()}>Messages</NavLink>
        </li>
        <li>
          <NavLink to="users" className={SelectLink()}>Find users</NavLink>
        </li>
        <li>
          <NavLink to="news" className={SelectLink()}>News</NavLink>
        </li>
        <li>
          <NavLink to="music" className={SelectLink()}>Music</NavLink>
        </li>
        <li>
          <NavLink to="settings" className={SelectLink()}>Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

