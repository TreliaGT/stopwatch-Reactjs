import React, {Component} from 'react';
import '../App.css';
import {
    Navbar,
} from 'reactstrap';

import {FormGroup} from "react-bootstrap";


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            CurrentUser: [],
            registeruser: [],

        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.Register = this.Register.bind(this);
        localStorage.removeItem('CurrentUser');
        this.state.registeruser = JSON.parse(localStorage.getItem('users'));
        if (null == this.state.registeruser) {
            this.state.registeruser = [];
        }
    }

    onSubmit = event => {
        event.preventDefault();

        for (let i = 0; i < this.state.registeruser.length; i++) {
            if (this.state.registeruser[i] === this.state.username+ " " +this.state.password) {
                this.state.CurrentUser.push(this.state.username);
                localStorage.setItem('CurrentUser', JSON.stringify(this.state.CurrentUser));

                this.props.onSubmit(this.state.username);
            }
        }
    };


    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    Register() {
        this.state.registeruser = [...this.state.registeruser];
        this.state.registeruser.push(this.state.username + " "+this.state.password);
        localStorage.setItem('users', JSON.stringify(this.state.registeruser));
    }


    render() {
        return (
            <div className="container">
                <Navbar color="dark" inverse toggleable>
                    <h1 className="display-3 text-light">Login Form </h1>
                </Navbar>
                <form onSubmit={this.onSubmit}>
                    <FormGroup controlId="username" className="form-group">
                        <labal htmlFor="Username">UserName:</labal>
                        <input type="text" id="Username"
                               name="Username"
                               autoFocus
                               value={this.state.username}
                               onChange={this.handleUsernameChange}
                               className="form-control"
                        />
                    </FormGroup>
                    <FormGroup controlId="password" className="form-group">
                        <labal htmlFor="Password">Password:</labal>
                        <input type="password" id="Password"
                               name="Password"
                               autoFocus
                               value={this.state.password}
                               onChange={this.handlePasswordChange}
                               className="form-control"
                        />
                    </FormGroup>
                    <div>
                        <input type="button"
                               value="Register"
                               className="btn btn-outline-primary"
                            onClick={this.Register}

                        />
                        <input type="submit"
                               value="Login"
                               className="btn btn-outline-primary"
                        />
                    </div>
                </form>
            </div>
        );
    }
}


export default Login;
