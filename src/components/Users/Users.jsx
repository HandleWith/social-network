import React from "react";
import classes from "./Users.module.css";
import userPhoto from "./../../assets/images/user.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pages = [];
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const setPagination = (totalPages, currentPage) => {
    let beforePage = currentPage - 1
    let afterPage = currentPage + 1
    if(currentPage > 1) {
      pages.unshift(<div onClick={ () => {props.onPageChange(currentPage - 1)}} className={classes.pagination_item}>{'<Prev'}</div>)
    }
    if(currentPage > 2) {
      pages.splice(2, 0, <div onClick={ () => {props.onPageChange(1)}} className={classes.pagination_item}>1</div>)
      if(currentPage > 3) {
        pages.splice(3, 0, <div className={classes.pagination_item}>...</div>)
      }
    }

    //how many pages to show before current page
    if(currentPage === totalPages) {
      beforePage -= 2
    }
    else if (currentPage === totalPages - 1) {
      beforePage -= 1
    }

    //how many pages to show after current page
    if(currentPage === 1) {
      afterPage += 2
    }
    else if(currentPage === 2) {
      afterPage += 1
    }

    for(let pageLength = beforePage; pageLength <= afterPage; pageLength ++) {
      if(pageLength > totalPages) {
        continue
      }
      if(pageLength === 0) {
        pageLength += 1
      }
      pages.push(<div onClick={ () => {props.onPageChange(pageLength)}} className={`${pageLength === currentPage  && classes.current_page} ${classes.pagination_item}`}>{pageLength}</div>)
    }
    if(currentPage < totalPages - 1) {
      pages.splice(pages.length, 0, <div onClick={ () => {props.onPageChange(totalPages)}} className={classes.pagination_item}>{totalPages}</div>)
      if(currentPage < totalPages - 2) {
        pages.splice(pages.length - 1, 0, <div className={classes.pagination_item}>...</div>)
      }
    }
    if(currentPage < totalPages) {
      pages.push(<div onClick={ () => {props.onPageChange(currentPage + 1)}} className={classes.pagination_item}>{'Next>'}</div>)
    }
    return pages
  }
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>USERS</h1>
      <div className={classes.pagination_wrapper}>
        <div className={classes.pagination}>
          {
            setPagination(pagesCount, props.currentPage)
          }
        </div>
      </div>
      {props.users.map((user) => {
        return (
          <div className={classes.user} key={user.id}>
            <div className={classes.photo_wrapper}>
              <NavLink to={'/profile/' + user.id}>
              <img alt="user" src={user.photos.small != null 
              ? user.photos.small 
              : userPhoto} className={classes.photo}></img>
              </NavLink>
              <div className={classes.button_wrapper}>
                {user.followed 
                ? (<button disabled={props.followingInProgress.some((u) => u === user.id)} onClick={() => {
                  props.unFollow(user.id)
                }} className={classes.btn}>Unfollow</button>) 
                : (<button disabled={props.followingInProgress.some((u) => u === user.id)} onClick={() => {
                  props.follow(user.id)
                }} className={classes.btn}>Follow</button>)
                }
              </div>
            </div>
            <div className={classes.user_info}>
              <p className={classes.user_name}>{user.name}</p>
              <p className={classes.user_status}>{user.status}</p>
            </div>
            <div className={classes.user_location}>
              <p className={classes.country}></p>
              <p className={classes.city}></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
