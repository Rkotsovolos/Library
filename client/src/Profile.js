// import {useState} from 'react'


function Profile({user, bio, setBio}) {

   function handleBioChange(e) {
        setBio(e.target.value)
    }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     const formData = { bio: bio };
    //     const dataArray = [...submittedData, formData];
    //     setSubmittedData(dataArray);
    //     setBio("");
        
    //   }
    
    return (

        <div className="container" style={{paddingTop: 75}}>
            <h1 style={{display: "flex",justifyContent:"center", color: "white", fontFamily: "Cursive"}}>{user.username}'s Profile</h1>
            <p style={{textAlign: "center", fontFamily: "cursive", color: "white", fontSize: 30, paddingTop: 20}}>{bio}</p>
            <div style={{display: "flex", justifyContent:"center"}}>
                <button className="bg-warning" style={{fontWeight: "bold"}}onClick={handleBioChange}>Edit Profile</button>
            </div>
        </div>

    )


}

export default Profile

