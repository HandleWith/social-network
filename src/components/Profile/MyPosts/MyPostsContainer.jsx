import {
  addPost
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux"

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postData,
    postText: state.profilePage.postText
  }
}

export default connect(mapStateToProps, { addPost }) (MyPosts)
