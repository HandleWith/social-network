import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/messageItem";
import { Field, Formik, Form } from "formik";

const Dialogs = (props) => {

  let dialogsElement = props.dialogsData.map((d) => (
    <DialogsItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElement = props.messageData.map((m) => (
    <MessageItem name={m.name} key={m.id} message={m.message} />
  ));

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>DIALOGS</h1>
      <div className={classes.name_list}>{dialogsElement}</div>
      <div className={classes.messages_list}>{messagesElement}
      <MessageForm addMessage={props.addMessage}/>
      </div>
    </div>
  );
};

const MessageForm = (props) => {
  return (
    <Formik
      initialValues={{
        messageBody: ''
      }}
      onSubmit={(values, { setSubmitting }) => {
        props.addMessage(values.messageBody)
        values.messageBody = ''
        setSubmitting(false)
      }}>
      {({ isSubmitting }) => (
        <Form>
        <Field className={classes.input} name="messageBody" type="text" placeholder="write message..."/>
          <div className={classes.btn_wrapper}>
            <button disabled={isSubmitting} className={classes.btn} >Send</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Dialogs;
