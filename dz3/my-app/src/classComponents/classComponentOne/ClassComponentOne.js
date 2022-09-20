import React from "react";
import classes from "./classComponentOne.module.css"


class ClassComponentOne extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={classes.firstColor}>
                <ul>
                    <li>
                        {this.props.includes.name}
                    </li>
                    <li>
                        {this.props.includes.age}
                    </li>
                </ul>

            </div>

        );

    }
};

export default ClassComponentOne;