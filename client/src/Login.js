import { useState } from 'react'

function Login({ onLogin }) {
    
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        })
          .then((r) => r.json())
          .then((user) => onLogin(user));
      }

    return (
        <div className= "container">
          <div className="row justify-content-center">
            <div className="col-8" >
              <div className="card mt-5 bg-warning" style={{borderRadius:"10px", fontFamily:"dosis"}}>
                <div className="card-header " style={{color:"white"}} >
                  <h3 className="text-center mt-2 " style={{color: "black", fontWeight: "bold"}} >User Login:</h3>
                    <form  onSubmit={handleSubmit}>
                      <div className=" form-group text-center mt-2">
                        <label className="mr-2" htmlFor="name" style={{color: "black", fontWeight: "bold"}}>Username:</label>
                        <input 
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className="mr-2 ml-2" htmlFor="name" style={{color: "black", fontWeight: "bold"}}>Password:</label>
                        <input 
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <p className="text-center">
                        <button className="btn btn-dark mt-3 mb-3" type="submit">Login</button>
                      </p>
                      <br></br>
                      <h1 style={{color: "black", fontWeight: "bold", textAlign: "center"}}>OR</h1>
                      <br></br>  
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    )


}

export default Login