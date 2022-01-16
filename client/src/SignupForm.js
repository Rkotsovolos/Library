import React, { useState } from "react";
// import { Link } from "react-router-dom";

function SignupForm({ setUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("/signup", configObj).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          console.log(user);
          setUser(user);
        });
      } else {
        resp.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="card mt-2 bg-warning" style={{borderRadius:"10px", fontFamily:"dosis"}}>
            <div className="card-header bg-warning" style={{color:"white"}}>
            <h3 className="text-center" style={{color: "black", fontWeight: "bold"}}>Register</h3>
            </div>
            <h5 className="text-center mt-2" style={{color: "black", fontWeight: "bold"}} >Create Account:</h5>
            <form onSubmit={handleSubmit}>
              <div className="col-12">
                <label className="col-6 text-right" htmlFor="name" style={{color: "black", fontWeight: "bold"}}>Username:</label>
                <input
                  className="col-3"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-12">
                <label className="col-6 text-right" htmlFor="password" style={{color: "black", fontWeight: "bold"}}>Password:</label>
                <input
                  className="col-3"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="text-center">
                <button className="btn btn-dark mt-3 mb-3" type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;