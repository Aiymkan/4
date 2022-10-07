import React from 'react';
import {Link} from 'react-router-dom'

function Menu(props) {
    return (
        <ul>
            <li>
                <Link to='/' className='Link'>post page</Link>
            </li>
            <li>
                <Link to='/about' className='Link'>about us</Link>
            </li>
            <li>
                <Link to='/page' className='Link'>title page</Link>
            </li>
        </ul>
    );
}

export default Menu;