import { useState } from 'react'

import ListCard from "./ListCard"
import ListBookCard from "./ListBookCard"
import EmptyListDisplay from "./EmptyListDisplay"

function ReadingList({userLists, user, postList, lists, setLists}) {

    const [show, setShow] = useState(false)    
    const [formData, setFormData] = useState({name:""})

    

    if(userLists.length === 0 ) {
        return (
        <div className="card-header" style={{display: "flex", paddingTop: 50, textAlign: "center", justifyContent: "center"}}>
                
                <form  style={{ width: '30%'}} onSubmit={handleSubmit}>
                    <div className="form-group mx-sm-3 ">
                        <label style={{marginRight:"5px", color: "white", fontSize:35, fontFamily: "MedivalSharp"}}><strong>Create a Book List:</strong> </label>
                        <input style={{textAlign: "center"}}value={formData.name} name="name" required="required" type="input" className="form-control"  placeholder="Book List Name..." onChange={handleOnChange}/>
                    </div>
                    <button type="submit" className="btn btn-warning" style={{fontWeight:"bold"}}>Create</button>
                </form>
            </div>
        )
    }
    

    const bookLists = lists[0].book_lists
  

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
            
        })
    }
   
   
    const listsDisplay = userLists.map(list => <ListCard key={list.id} id={list.id} name={list.name} setShow={setShow} show={show} handleListDelete={handleListDelete} />)
    
    const listBooksDisplay = bookLists?.map(book => <ListBookCard key={book.id} id={book.id} image={book.book.image} title={book.book.title} author={book.book.author} />)

        

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
                {bookLists.length > 0 ? null : <EmptyListDisplay />}
                {show ? listBooksDisplay : null }
              
            </div>
        
        </div>
    )

}

export default ReadingList