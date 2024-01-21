import React from "react";
import classes from "./App.module.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import { Route, HashRouter, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginFormContainer from "./components/Login/LoginFormContainer";

const App = () => {
  return (
    <HashRouter>
      <div className={classes.wrapper}>
        <HeaderContainer />
        <Navbar />
        <main className={classes.wrapper_content}>
          <Routes>
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginFormContainer />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
