import React from 'react';

function FunctionComponent(props) {
    const timeToParty = () => {
        console.log(alert("hello world!"))

    }
    return (
        <div>
            <input type="text"placeholder="party party yeyeyeye!!!"/>
            <button onClick={timeToParty}>click</button>
        </div>
    );
}

export default FunctionComponent;