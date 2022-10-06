import React, {useState} from 'react';
import UsersList from "../../components/usersList/UsersList";

function UsersPage(props) {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})
    // const [id, setId] = useState(0)


    const getUsers = () =>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response =>response.json())
            .then(data=>setUsers(data))

    }
    const getUser = e => {
        fetch(`https://jsonplaceholder.typicode.com/users/${e.target.dataset.id}`)
            .then(response=>response.json())
            .then(data=>setUser(data))
        console.log(e.target.dataset.id)
    }


    return (
        <div>
            <button onClick={getUsers}>users</button>
            <h1>Users List</h1>
            <UsersList usersList={users} userList={getUser}  />



            <ul>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
            </ul>
        </div>
        


    );
}

export default UsersPage;