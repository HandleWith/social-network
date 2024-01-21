import profileReduser from "./profile-reducer"
import messageReduser from "./message-reducer"

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, post: "How are you?", likesCount: 12 },
        { id: 2, post: "What is new?", likesCount: 5 },
      ],
      postText: "",
    },
    messagesPage: {
      dialogsData: [
        { id: 1, name: "Aleksey" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Dmitry" },
        { id: 4, name: "Vladimir" },
        { id: 5, name: "Ksenia" },
        { id: 6, name: "Kirill" },
        { id: 7, name: "Yaroslav" },
        { id: 8, name: "Evgeniy" },
        { id: 9, name: "Kristina" },
        { id: 10, name: "Konstantin" },
      ],
      messageData: [
        { id: 1, name: "Dmitry", message: "Hi, how are you" },
        { id: 2, name: "Me", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eum, fuga architecto aut."},
        { id: 3, name: "Dmitry", message: "Sit, eum, fuga architecto aut." },
        { id: 4, name: "Me", message: "minima dolores quisquam velit suscipit nemo sapiente quaerat perferendis."},
        { id: 5, name: "Dmitry", message: "Ut quisquam quas optio neque nisi, ad cupiditate quod repellat natus explicabo voluptatem ipsa ipsum ducimus officiis Soluta, natus."},
        { id: 6, name: "Me", message: "Facilis cum voluptas ipsa ipsam et a optio quaerat iusto nemo voluptate."},
      ],
      messageText: "",
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State changed')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action) 
    this._state.messagesPage = messageReduser(this._state.messagesPage, action)
    this._callSubscriber()
  }
}

export default store;
