import {  useContext } from "react";
import { ListsContext } from './context/listsState'


function BookCard({title, author, image, id}) {
    
    const {lists} = useContext(ListsContext)


    console.log(lists)

    function addBookToList(e) {
        e.preventDefault()
        const reading_lists_id = e.currentTarget.value
        
        fetch(`reading_lists/${reading_lists_id}/add_book?book_id=${id}`, {
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
                {/* <button onClick={addBookToList}className="bg-warning" style={{fontWeight: "bold"}}>Add to Reading</button> */}

                <div className="input-group">
                    <select onChange={addBookToList} className="custom-select" style={{marginBottom:"10px", marginLeft:"15px", marginRight:"15px"}} id="inputGroupSelect04">
                        <option value="Add to Book List">Add Item to Book List</option>
                        {lists?.map(list => <option value={list.id} key={list.id} id={list.id}>{list.name} </option>)}
                    </select>
                </div>
            </div>
        </div>

    )

}

export default BookCard