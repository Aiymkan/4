import React from 'react';

function AboutUs({textOne}) {
    return (
        <ul>
            <li>title: {textOne.title}</li>
            <li>subtitle: {textOne.subtitle}</li>
        </ul>
    );
}

export default AboutUs;