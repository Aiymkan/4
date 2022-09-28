import React from 'react';

function ContactsPage(props) {
    const sayHello = () => {
        alert("Hello, Asia!")
    }

    const openInfo = () => {
        console.log("goodbye, Asia!")
    }

    const changeName = event => {
        console.log(event.target.value)
    }

    const onBlur = event => {
        console.log(event.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("hello")
    }





    return (
        <div>
            <input onChange={changeName} type="text" placeholder="name"/>
            <input type="text" onBlur={onBlur} placeholder="LastName"/>
            <button onClick={sayHello}>Add user</button>
            <button onDoubleClick={openInfo}>Open Info</button>

            <form onSubmit={onSubmit}>
                <input type="number" placeholder="age"/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default ContactsPage;