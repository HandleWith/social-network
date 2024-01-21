import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader"
import userImg from "./../../../assets/images/user.png"
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader/>
  }
  let contacts = []
  let contactItem = props.profile.contacts
  if(props.profile) {
    for(let c in contactItem) {
      if (contactItem[c] !== null) {
        contacts.push(
          <div>
            <label>{c}: </label>
            <a target="blank" href={contactItem[c]}>
              {contactItem[c]}
            </a>
          </div>
        );
      }
    }
  }
  return (
    <div className={classes.profile}>
        <img className={classes.img} src={props.profile.photos.large || userImg} alt='profile img'></img>
        <div className={classes.info}>
          <h1 className={classes.name}>{props.profile.fullName}</h1>
          <p className={classes.about_me}>{props.profile.aboutMe}</p>
          <div className={classes.status}>
            <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
          </div>
          <div className={classes.contacts_wrapper}>
            {
              contacts.map(c => {
                return <div>{c}</div>
              })
            }
          </div>
        </div>
    </div>
  );
};

export default ProfileInfo;