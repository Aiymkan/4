import React, {Component} from 'react';

class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                username: "",
                email: "",
                age: 0,
                gender: ""
            }
        }
    }
    changeInput = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    changeClear = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: ""
            }
        })
        console.log(this.state)
    }

    registerUser = e =>{
        e.preventDefault();
        {
            console.log(this.state)
        }
    }



    render() {
        return (
            <form onSubmit={this.registerUser}>
                <input type="text"
                       placeholder="username"
                       name="username"
                       required
                       onChange={this.changeInput}
                />
                <input type="text"
                       placeholder="email"
                       name="email"
                       required
                       onChange={this.changeInput}
                />
                <input type="number"
                       placeholder="age"
                       name="age"
                       required
                       onChange={this.changeInput}
                />
                <select name="gender" id="" onChange={this.changeInput} >
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                <button>add</button>
                <button type="reset" onClick={this.changeClear}>clear all</button>

            </form>
        );
    }
}

export default FormPage;