import React from "react";
import classes from "./messageItem.module.css";

const MessageItem = (props) => {
  return (
    <div className={classes.message_wrapper}>
      <div className={classes.img_wrapper}>
        <div className={classes.img}></div>
        <div className={classes.message_name}>{props.name}</div>
      </div>
      <div className={classes.message}>{props.message}</div>
    </div>
  );
};

export default MessageItem;
