import React from 'react';

function AboutUs({randomText}) {
    return (
        <div>
            <h1>About us </h1>
            <ul>
                <li>{randomText.title}</li>
                <li>{randomText.text}</li>
            </ul>
        </div>
    );
}

export default AboutUs;