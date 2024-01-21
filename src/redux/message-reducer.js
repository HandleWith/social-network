const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
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
  ]
}

const messageReduser = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE: 
      return {
        ...state,
        messageData: [...state.messageData, {id: 7, name: "Dmitry", message: action.newMessageBody}]
      }
    default:
      return state
  }
};

export const addMessage = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})

export default messageReduser;
