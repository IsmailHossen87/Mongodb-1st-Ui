import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
const handleSubmit = event =>{
  event.preventDefault()
  const from = event.target;
  const name = from.name.value;
  const email = from.email.value;
  const user = {
    name,email
  }
  console.log(user)
  fetch('http://localhost:5000/users',{
    method:'post',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data => console.log(data))
  from.reset();
}
  return (
    <>
      <h1>Simple Crud</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" /><br />
        <input type="email" name="email" id="" /> <br />
        <input value='add user' type="submit" />
      </form>

    

    </>
  );
}

export default App;
