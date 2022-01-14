import { Link } from 'react-router-dom'

function Header({user, onLogout}) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

    return (
        <header className="fluid" style={{display: "flex", justifyContent: "space-evenly"}}>
            <Link to="/"><h1 style={{color:"black", margin: "auto", marginTop:"20px", padding:"10px", fontFamily:"yellowtail"}}>Book Scroll!</h1></Link>
                <h1 className="mt-4 mr-2" style={{fontFamily:"dosis"}} >Welcome, {user.username}!</h1>
             <Link to="/"><button className="btn btn-primary btn-lg" style={{fontFamily:"dosis", marginTop: "25px", color: "yellow", backgroundColor: "black", }} type="submit" value="Add Item"  onClick={handleLogout} >Logout</button></Link>
        </header>
    )
}

export default Header