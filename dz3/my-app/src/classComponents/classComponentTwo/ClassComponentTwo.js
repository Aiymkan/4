import React from "react";
import classes from "./classComponentTwo.module.css"

class ClassComponentTwo extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={classes.firstColor}>
                <ul>
                    <li>
                        {this.props.keep.name}
                    </li>
                    <li>
                        {this.props.keep.age}
                    </li>
                </ul>
            </div>
        )
    };
}


export default ClassComponentTwo;