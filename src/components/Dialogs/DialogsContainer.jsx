import Dialogs from "./Dialogs"
import { addMessage } from "../../redux/message-reducer"
import { connect } from "react-redux"
import { compose } from "redux"
import withAuthRedirect from "../Hoc/WithAuthRedirect"

let mapStateToProps = (state) => {
  return {
    messageData: state.messagesPage.messageData,
    dialogsData: state.messagesPage.dialogsData,
    messageText: state.messagesPage.messageText,
    isAuthorized: state.auth.isAuthorized
  }
}

export default compose(
  connect(mapStateToProps, { addMessage }),
  withAuthRedirect,
)(Dialogs)

