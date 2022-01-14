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
            <h5 className="text-center mt-2" >User Login:</h5>
              <form  onSubmit={handleSubmit}>
                <div className=" form-group text-center mt-2">
                  <label className="mr-2" htmlFor="name">Username:</label>
                  <input 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label className="mr-2 ml-2" htmlFor="name">Password:</label>
                  <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <p className="text-center">
                  <button className="btn btn-warning mt-3 mb-3" type="submit">Login</button>
                </p>
                <br></br>
                <br></br>  
              </form>
        </div>
    )


}

export default Login