import React from 'react'
import { useState, useEffect, useContext } from "react";
import {ListsContext} from './context/listsState'
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
  const [bio, setBio] = useState('hey')
  const [note, setNote] = useState('')
  const {lists, setLists} = useContext(ListsContext)



  
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


  },[])

  useEffect(() => {
    fetch('/reading_lists')
    .then(res => res.json())
    .then((data) => setLists(data))
  }, [])
  


  //Create a new Note
  const postNote = (note) => {
    fetch('/notes', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(note)
    })
    .then(res => res.json())
    .then(newNote => {
      setNote([{newNote,...note}])
    })
  }

// Logout function
  function onLogout() {
    setUser(null);
  }


  //Create a new Reading List 
  function postList(newList) {
    fetch('/reading_lists', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
    },
        body: JSON.stringify(newList)
    })
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(newBooklist => {setLists([newBooklist, ...lists])})
  }

  const filteredBooks = books.length <= 0 ? books : books.filter(book => book.title.toLowerCase().includes(search.toLowerCase())).sort()
  const listsDisplay = user ? lists.filter(list => list.user.id === user.id) : lists



  if (user && user.username) {
    return (
      
        <div className="App">
          <Header user={user} onLogout={onLogout}/>
          <Nav />
          
          <Routes>
            <Route exact path= "/" element={<Home search={search}  setSearch={setSearch} filteredBooks={filteredBooks} setBooks={setBooks}/>} books={books} lists={lists}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Reading_list" element={<ReadingList postNote={postNote} note={note} setNote={setNote} userLists={listsDisplay} postList={postList} lists={lists} setLists={setLists}/>}/>
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