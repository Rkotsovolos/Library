// import {useState} from 'react'


function Profile({user, bio, setBio}) {

    
    return (

        <div className="container" style={{paddingTop: 75}}>
            <h1 style={{display: "flex",justifyContent:"center", color: "white", fontFamily: "Cursive"}}>{user.username}'s Profile</h1>
            <p style={{textAlign: "center", fontFamily: "cursive", color: "white", fontSize: 30, paddingTop: 20}}>{bio}</p>
            <div style={{display: "flex", justifyContent:"center"}}>
                <button className="bg-warning" style={{fontWeight: "bold"}}>Edit Profile</button>
            </div>
        </div>

    )


}

export default Profile

