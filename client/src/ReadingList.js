import { useState } from 'react'
import ListCard from "./ListCard"
import ListBookCard from "./ListBookCard"
import EmptyListDisplay from "./EmptyListDisplay"

function ReadingList({userLists, user, postList, lists, setLists}) {

    const [listBooks, setlistBooks] = useState([])
    const [formData, setFormData] = useState({name:""})



    function handleOnChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    function handleSubmit(e){
        e.preventDefault()
        postList(formData)
        setFormData({name:""})
    }

    // Delete List Functionality

    const handleListDelete = (id) => {
        fetch(`/reading_lists/${id}`, {
            method: "DELETE",
            headers: {'Content-type':'application/json'}
        })
        .then(res => res.json())
        .then(() => {
            setLists(lists.filter(list => list.id !== id))
            setlistBooks([])
        })
    }



    const booksToDisplay = listBooks.books
    const listsDisplay = userLists.map(list => <ListCard key={list.id} id={list.id} name={list.name} setlistBooks={setlistBooks} handleListDelete={handleListDelete} />)
    const listBooksDisplay = booksToDisplay?.map(book => <ListBookCard key={book.id} id={book.id} list_id={listBooks.id} image={book.image} title={book.title} setlistBooks={setlistBooks}/>)
    

    return(
        <div  style={{borderRadius:"10px", fontFamily:"dosis"}}>
            <div className="card-header" style={{display: "flex", paddingTop: 50, textAlign: "center", justifyContent: "center"}}>
                
                <form  style={{ width: '30%'}} onSubmit={handleSubmit}>
                    <div className="form-group mx-sm-3 ">
                        <label style={{marginRight:"5px", color: "white", fontSize:35, fontFamily: "MedivalSharp"}}><strong>Create a Book List:</strong> </label>
                        <input style={{textAlign: "center"}}value={formData.name} name="name" required="required" type="input" className="form-control"  placeholder="Book List Name..." onChange={handleOnChange}/>
                    </div>
                    <button type="submit" className="btn btn-warning" style={{fontWeight:"bold"}}>Create</button>
                </form>
            </div>
            <div className="card-body d-flex justify-content-around flex-wrap" style={{display: "flex", paddingTop: 75}}>
                {listsDisplay}
            </div>
            <hr/>
            <div className="card-body d-flex justify-content-around flex-wrap">
                {listBooks ? listBooksDisplay : <EmptyListDisplay />}
            </div>
        </div>
    )

}

export default ReadingList