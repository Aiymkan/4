import React, {Component} from 'react';

class PortfolioPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "I am initial text"
        }
    }

    changeText = () => {
        this.setState(
            {
                title: "I am new text"
            }
        )
    }

    render() {
        return (
            <div>
                <h1>Portfolio Page - {this.state.title}</h1>
                <button onClick={this.changeText}>change text</button>

            </div>
        );
    }
}

export default PortfolioPage;