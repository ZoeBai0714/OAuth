import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from "./Container/Nav";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
function App() {
  return (
    <BrowserRouter>
       <NavBar/>
       <Route excat path = "/home"  component = {Homepage}/>
       <Route exact path = "/auth/login" component = {Login}/>
       <Route exact path = "/auth/logout" component = {Logout}/>
    </BrowserRouter>
  );
}

export default App;

