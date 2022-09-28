import React from 'react';

function Posts({postList}) {
    // console.log(props)
    return (
        <ul>
            {
                postList.length > 0
                    ?
                postList.map((post, key) => <li key={key}>{post}</li>)
                    :
                    <li>not news</li>



            }
        </ul>
    );
}

export default Posts;