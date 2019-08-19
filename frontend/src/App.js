import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from "./Container/Nav";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
function App() {
  return (
    <BrowserRouter>
       <NavBar/>
       <Route excat path = "/home"  component = {Homepage}/>
       <Route exact path = "/login" component = {Login}/>
    </BrowserRouter>
  );
}

export default App;

