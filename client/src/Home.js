// import { useState, useEffect } from 'react'
import BookCard from './BookCard'

function Home({books, setBooks, search, setSearch, filteredBooks, lists}) {


    const bookCards = filteredBooks.map(book => <BookCard 
        key={book.id} 
        id={book.id} 
        title={book.title} 
        author={book.author} 
        image={book.image} 
        
        />)

    // const searchBook = (e) => {
    //     e.preventDefault();
    //         fetch(`https://www.googleapis.com/books/v1/volumes?q=${books}`)
    //         .then(res => res.json())
    //         .then((data) => {
    //             console.log(data)
    //             setBooks(data.items)
    //         })
            
    // }
    const searchBook = (e) => {
        e.preventDefault();
            fetch('/books')
            .then(res => res.json())
            .then(setBooks)
            
    }
    


    return (
        <div className="container">
            <div style={{textAlign: "center", paddingTop: 100}}>
                <h1 style={{color: "white", fontFamily: 'Courgette'}}>Search Title</h1>
            </div>
            <form style={{display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 30}} onSubmit={searchBook}>  
                <input className="form-control mr-sm-2 " type="text" value= {search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search for a Scroll..." style={{textAlign: "center", fontWeight: "bold"}} /> 
            </form>
            <div style= {{display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 20}}>
                    <button className="btn btn-warning btn-md" style= {{fontWeight: "bold"}} type="button" onClick={searchBook}>Search</button>
                </div>
            <div className="card-body d-flex justify-content-around flex-wrap">
                {bookCards}
            </div>
        </div>
    )

}

export default Home;