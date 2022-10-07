import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'

function PostPage(props) {
    const [users, setUsers] = useState([])
    const getUser=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response=>response.json())
            .then(data=>setUsers(data))
    }
    useEffect(getUser,[])
    return (
        <>
            <h1>Post Page</h1>
            <ul>
                {users.slice(0,10).map(post=><li><Link to={`/post/${post.id}`}>{post.title}</Link></li>)}
            </ul>
        </>
    );
}

export default PostPage;