import React from 'react';

function UsersList({usersList, userList}) {
    return (
        <ul>
            {
                usersList.map(users=>
                        <li key={users.id}>
                            <span>{users.name}</span> -
                            <span>{users.username}</span> -
                            <span>{users.email}</span>
                            <button data-id={users.id} onClick={userList}>user</button>
                        </li>)
            }
        </ul>

    );
}

export default UsersList;