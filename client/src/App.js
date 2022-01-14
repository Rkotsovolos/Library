import React from 'react'
import { useState, useEffect } from "react";
import {  Route, Routes } from "react-router-dom";
import Login from "./Login"
import SignupForm from "./SignupForm"
import Header from "./Header"
import Home from "./Home"

function App() {
  // const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);



  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

// Logout function
  function onLogout() {
    setUser(null);
  }

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  if (user && user.username) {
    return (
      
        <div className="App">

          
          <Header user={user} onLogout={onLogout}/>

          <Routes>
            <Route exact path= "/" element={<Home />} />
          </Routes>
        </div>
      
    )
  }
  else {
    return (
      <div>
        <Login onLogin={setUser} />
        <SignupForm setUser={setUser}/>
      </div>
      )
  }
}

export default App;