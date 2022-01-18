import React from 'react'
import { useState, useEffect } from "react";
import {  Route, Routes } from "react-router-dom";
import Login from "./Login"
import SignupForm from "./SignupForm"
import Nav from "./Nav"
import Header from "./Header"
import Home from "./Home"
import About from './About'
import ReadingList from './ReadingList'
import Profile from './Profile'




function App() {
  // const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState('')
  const [bio, setBio] = useState('')
  const [note, setNote] = useState('')


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
    .then((data) => console.log(data))


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

  const filteredBooks = books.length <= 0 ? books : books.filter(book => book.title.toLowerCase().includes(search.toLowerCase())).sort()
  



  if (user && user.username) {
    return (
      
        <div className="App">
          <Header user={user} onLogout={onLogout}/>
          <Nav />
          
          <Routes>
            <Route exact path= "/" element={<Home search={search}  setSearch={setSearch} filteredBooks={filteredBooks} setBooks={setBooks}/>} books={books} />
            <Route path="/About" element={<About />}/>
            <Route path="/Reading_list" element={<ReadingList note={note} setNote={setNote} />}/>
            <Route path="/Profile" element={<Profile user={user} bio={bio} setBio={setBio}/>} />
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