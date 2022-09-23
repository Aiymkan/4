import React, {Component} from 'react';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {title: "Данные принципы должны быть реализуемы посредством 7 «расчётов»"}
    }
    changeText = () => {
        this.setState({title: ""})
    }
    render() {
        return (
            <div>
                <p>{this.state.title}</p>
                <button onClick={this.changeText}>add</button>
            </div>
        );
    }
}

export default AboutUs;