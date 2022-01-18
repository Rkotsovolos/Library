

function BookCard({title, author, image, id}) {


    function addBookToList(e) {
        e.preventDefault()
        const book_id = e.currentTarget.value
        
        fetch(`reading_lists/${book_id}/add_book?book_id=${id}`, {
            method: 'POST',
            headers: {'Content-Type':'application/json'}
          })
          .then(res => res.json())
          .then(res => console.log(res))
    }

    return (

        <div className="card mt-3 bg-dark" style={{padding: 25}}>
            <div className="card" style={{backgroundColor: "5d3a1a"}}>
                <img className="card-img-top" src={image} alt='books' ></img>
                <h3 style={{display: "flex", justifyContent: "center", color: 'black', fontFamily: 'Courgette'}}>{title}</h3>
                <h5 style={{display: "flex", justifyContent: "center", color: 'black', fontFamily: 'Courgette'}}>Author: {author}</h5>
                <button onClick={addBookToList}className="bg-warning" style={{fontWeight: "bold"}}>Add to Reading</button>
                
            </div>
        </div>

    )

}

export default BookCard