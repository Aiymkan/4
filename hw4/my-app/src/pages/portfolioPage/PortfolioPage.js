import React, {Component} from 'react';

class PortfolioPage extends Component {
    constructor(props) {
        super(props);
        this.state = {works: []}
    }
    getWork = () => {
        this.setState({works: ["Work1","Work2"]})
    }
    render() {
        return (
            <>
                <button onClick={this.getWork}>get</button>
                <ul>
                    <li>Work1</li>
                    <li>Work2</li>
                </ul>

            </>
        );
    }
}

export default PortfolioPage;