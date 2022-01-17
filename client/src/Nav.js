import { Link } from 'react-router-dom'
// import About from './About'


function Nav() {

    return (
        <div>
            <nav class="navbar navbar-dark " style={{display: "flex", justifyContent: "space-around", paddingTop: 20}}>
                <li class="nav-item">
                    <Link to="/"><h4 style={{color: "white", fontSize: 25}}>Home</h4></Link>
                </li>
                <li class="nav-item">
                 
                  <Link to="/About"><h4 style={{color: "white", fontSize: 25}}>About</h4></Link>
            
                  
                </li>
                <li class="nav-item">
                    <Link to="/Reading_list"><h4 style={{color: "white", fontSize: 25}}>Reading List</h4></Link>
                </li>
                <li class="nav-item">
                    <Link to="/Profile"><h4 style={{color: "white", fontSize: 25}}>Profile</h4></Link>
                </li>
            </nav>
        </div>
    )

}

export default Nav

