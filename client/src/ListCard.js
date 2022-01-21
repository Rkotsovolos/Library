// import BookLists from './BookLists'

function ListCard({id, name, setListBooks, handleListDelete, setShow, show}){

console.log(id, "name")
    function displayBooks(id){  
        fetch(`reading_lists/${id}`)
        .then(res => res.json())
        .then(setListBooks)    
    } 
    
    return(
        <div className="card mt-3 bg-dark" style={{width: "18rem", textAlign:"center", color: "white", fontWeight: "bold", fontFamily: "Helvetica"}}>
            <div className="card-body">
                <h3 className="card-text">{name}</h3>
            </div>
            <button type="button" className="btn btn-warning" style={{marginLeft:"10px", marginRight:"10px", marginBottom:"10px", fontWeight: "bold"}} onClick={() => setShow(!show)}>View Books</button>
            <button type="button" className="btn btn-danger" style={{marginLeft:"10px", marginRight:"10px", marginBottom:"10px", fontWeight: "bold" }} onClick={() => handleListDelete(id)}>Delete List</button>
        </div>  
    )
}

export default ListCard