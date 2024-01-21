import React from "react";
import classes from "./DialogsItem.module.css";
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  let path = `/dialogs/${props.id}`;

  return (
    <NavLink className={classes.name} to={path}>
      {props.name}
    </NavLink>
  );
};

export default DialogsItem
