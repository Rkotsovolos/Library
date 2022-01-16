import React from 'react'
import { useState, useEffect } from "react";
import {  Route, Routes } from "react-router-dom";
import Login from "./Login"
import SignupForm from "./SignupForm"
import Nav from "./Nav"
import Header from "./Header"
import Home from "./Home"


function App() {
  // const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState('')


  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/books')
    .then(res => res.json())
    .then(setBooks)

    // fetch('/books')
    // .then(res => res.json())
    // .then(setBooks)
},[])

// Logout function
  function onLogout() {
    setUser(null);
  }

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  const filteredBooks = books.filter((book) => book.name.toLowerCase().includes(search.toLowerCase())).sort()

  if (user && user.username) {
    return (
      
        <div className="App">
          <Header user={user} onLogout={onLogout}/>
          <Nav />
          <Routes>
            <Route exact path= "/" element={<Home search={search}  setSearch={setSearch} filteredBooks={filteredBooks} setBooks={setBooks}/>} books={books} />
            
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