import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import { Formik, Form, Field } from "formik";

const MyPosts = (props) => {

  let postElement = props.posts.map((p) => <Post message={p.post} likesCount={p.likesCount} />);
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>My post</h2>
      <PostForm addPost={props.addPost}/>
      {postElement}
    </div>
  );
};

const PostForm = (props) => {
  return (
    <Formik
    initialValues={{
      postBody: ''
    }}
    onSubmit={(values, { setSubmitting }) => {
      props.addPost(values.postBody)
      setSubmitting(false)
    }}>
    {({isSubmitting}) => (
      <Form>
      <Field className={classes.input} name="postBody" type="text" placeholder="your news..."/>
        <div className={classes.btn_wrapper}>
          <button type="submit" disabled={isSubmitting} className={classes.btn}>Send</button>
        </div>
      </Form>
    )}
    </Formik>
  )
}

export default MyPosts;
