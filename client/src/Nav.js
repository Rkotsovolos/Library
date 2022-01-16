

function Nav() {

    return (
        <div>
            <nav class="navbar navbar-dark " style={{display: "flex", justifyContent: "space-around", paddingTop: 20}}>
                <li class="nav-item">
                    <a class="nav-link active" style={{color: "white", fontSize: 20}} aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" style={{color: "white", fontSize: 20}} href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" style={{color: "white", fontSize: 20}} href="#">Reading List</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" style={{color: "white", fontSize: 20}} href="#" tabindex="-1">Profile</a>
                </li>
            </nav>
        </div>
    )

}

export default Nav