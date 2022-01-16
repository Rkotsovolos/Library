import { Link } from 'react-router-dom'

function Header({user, onLogout}) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

    return (
        <header  style={{display: "flex", justifyContent: "space-between"}}>
          <div style={{paddingLeft: 20}}>
            <Link to="/"><h1 style={{color:"white", margin: "auto", marginTop:"20px", padding:"10px", fontFamily:"MedievalSharp"}}>Book Scroll</h1></Link>
          </div>
          <div style={{paddingRight: 20}}>
            <Link to="/"><button className="btn btn-warning btn-lg" style={{fontFamily:"MedievalSharp", marginTop: "25px", paddingRight:"20px", fontWeight: "bold" }} type="submit" value="Add Item"  onClick={handleLogout} >Logout</button></Link>
          </div>
        </header>
    )
}

export default Header