// import { useState, useEffect } from 'react'
import BookCard from './BookCard'

function Home({books, setBooks, search, setSearch, filteredBooks}) {


    const bookCards = filteredBooks.map(book => <BookCard 
        key={book.id} 
        id={book.id} 
        name={book.title} 
        author={book.author} 
        image={book.image} 
        page_count={book.page_count}
        />)

    const searchBook = (e) => {
        e.preventDefault();
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${books}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
            })
            
    }


    return (
        <div className="container">
            <div style={{textAlign: "center", paddingTop: 30}}>
                <h2 style={{color: "white", fontFamily: 'Courgette'}}>Search Title</h2>
            </div>
            <form style={{display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 30}} onSubmit={searchBook}>  
                <input className="form-control mr-sm-2 " type="text" value= {search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search for a Scroll..." style={{textAlign: "center", fontWeight: "bold"}} /> 
            </form>
            <div style= {{display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 20}}>
                    <button className="btn btn-warning btn-md" style= {{fontWeight: "bold"}} type="button" onClick={searchBook}>Search</button>
                </div>
            <div>
                {bookCards}
            </div>
        </div>
    )

}

export default Home