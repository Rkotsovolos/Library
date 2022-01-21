

function ListBookCard({id, name, image, title, author, setListBooks}){

    console.log(setListBooks, 'where am i')

    function handleListItemDelete(id) {
        
        fetch(`book_lists/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type':'application/json'}
        })
        .then(res => res.json())
        .then((data) => setListBooks(data))
    }


    console.log(id, 'id')
    
    console.log(title, 'title')


    return(
        <div className="card mt-3 bg-dark" style={{padding: 5}} id={id}>
           
            <div className="card" style={{backgroundColor: "5d3a1a"}}>
                <img className="card-img-top" src={image} alt='books' ></img>
                <h3 style={{display: "flex", justifyContent: "center", color: 'black', fontFamily: 'Courgette'}}>{title}</h3>
                <h5 style={{display: "flex", justifyContent: "center", color: 'black', fontFamily: 'Courgette'}}>Author: {author}</h5>
                {/* <select name='wishlist' onChange={handleChange}>
                        <option>Select Wishlist</option>
                        {list.map(l => <option value={l.id} key={l.id}>{l.name} </option>)}
                    </select> */}
            </div>
            <button type="button" className="btn btn-danger" style={{}} onClick={() => handleListItemDelete(id)}>Remove From List</button>

        </div>
    )
}

export default ListBookCard