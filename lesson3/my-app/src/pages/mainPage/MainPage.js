import React from 'react';
import classes from "./mainPage.module.css"
function MainPage(props) {
    return (
        <div className="mainPage">
            <h1 className={`${classes.title} uppercase`}>Main Page</h1>
            <p className={classes.paraph}>Lorem lorem lorem</p>
        </div>
    );
}

export default MainPage;