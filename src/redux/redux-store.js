import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import profileReduser from "./profile-reducer"
import messageReduser from "./message-reducer"
import sidebarReduser from "./sidebar-reducer"
import usersReduser from "./users-reducer"
import authReduser from "./auth-reducer"
import {thunk as thunkMidleware} from "redux-thunk"

let redusers = combineReducers ({
    profilePage: profileReduser,
    messagesPage: messageReduser,
    usersPage: usersReduser,
    sidebar: sidebarReduser,
    auth: authReduser,
})

let store = createStore(redusers, applyMiddleware(thunkMidleware))

window.store = store

export default store


