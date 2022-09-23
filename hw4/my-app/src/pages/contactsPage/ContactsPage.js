import React, {Component} from 'react';


class ContactsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {input:""}
    }
    changeInput = e => {
        this.setState({input: e.target.value})
    }
    addClick = () =>{
        console.log(this.state)
        this.setState({input: ""})
    }
    clearClick = () => {
        this.setState({input: ""})
    }

    render() {
        return (
            <form>
                <input type="text" onChange={this.changeInput}/>
                <button type="reset" onClick={this.addClick}>add</button>
                <button type="reset" onClick={this.clearClick}>clear</button>

            </form>
        );
    }
}

export default ContactsPage;