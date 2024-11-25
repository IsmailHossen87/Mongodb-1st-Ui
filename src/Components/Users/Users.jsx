import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const data = useLoaderData();
  const [users,setUser] = useState(data)

  const handleDelete = _id =>{
    fetch(`http://localhost:5000/users/${_id}`,{
        method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.deletedCount > 0){
            alert("Delete Sucessfully")
            const remaining = users.filter(user => user._id != _id)
            console.log(remaining)
            setUser(remaining)
        }
    })
  }
  return (
    <div>
      <p>{users.length}</p>
      <div>
        {users.map((item) => (
          <li key={item._id}>
            {item.name} : {item.email}
            {/* update data */}
            <Link to={`/update/${item._id}`}>
            <button >Update</button></Link>
            {/* delete item */}
            <button onClick={()=> handleDelete(item._id)}>x</button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Users;
