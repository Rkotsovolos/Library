import { useState, useEffect } from "react";
import Login from "./Login"
import SignupForm from "./SignupForm"



function App() {
  // const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);



  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);


  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);
  if (user && user.name) {
    return (
      <div className="App">
        {/* <h1>Page Count: {count}</h1> */}
      </div>
    )
  }
  else {
    return (
      <div>
        <Login onLogin={setUser} />
        <SignupForm setUser={setUser}/>
      </div>
      )
  }
}

export default App;