import React from 'react';
import classes from "./userPage.module.css";
function UserPage(props) {
    return (
        <div>
            <h1 className={classes.title}>User Page</h1>
            <p className={classes.paraph}>Lorem loren loern </p>
        </div>
    );
}

export default UserPage;