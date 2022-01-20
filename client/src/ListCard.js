

function ListCard({id, name, displayItems, setListItems, handleListDelete}){

    function displayBooks(id){  
        fetch(`/book_lists/${id}`)
        .then(res => res.json())
        .then(setListItems)    
    } 
   
    return(
        <div className="card mt-3 bg-dark" style={{width: "18rem", textAlign:"center", color: "white", fontWeight: "bold", fontFamily: "Helvetica"}}>
            <div className="card-body">
                <h3 className="card-text">{name}</h3>
            </div>
            <button type="button" className="btn btn-warning" style={{marginLeft:"10px", marginRight:"10px", marginBottom:"10px", fontWeight: "bold"}} onClick={() => displayBooks(id)}>View Books</button>
            <button type="button" className="btn btn-danger" style={{marginLeft:"10px", marginRight:"10px", marginBottom:"10px", fontWeight: "bold" }} onClick={() => handleListDelete(id)}>Delete List</button>
        </div>  
    )
}

export default ListCard