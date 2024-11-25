import { useLoaderData } from "react-router-dom";

const Update = () => {
    const data = useLoaderData()
    const handleUpdate = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updateUser = {name,email}
        console.log(updateUser)
        // client theke server ------------
        fetch(`http://localhost:5000/users/${data._id}`,{
            method:'put',
            headers:{
                'content-type' : "application/json"
            },
            body:JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div>
           <h4>Update Information Of {data.name}</h4>
           <form onSubmit={handleUpdate}>
            <input defaultValue={data?.name} name="name" type="text" /> <br />
            <input type="email" defaultValue={data?.email} name="email" id="" /> <br />
            <input value='Update' type="submit" />
           </form>
        </div>
    );
};

export default Update;