import React, {Component} from 'react'
import UsernameForm from './LoginForm'
import App from '../App'

class login extends Component {
    constructor() {
        super();
        this.state = {
            currentUsername: '',
            currentScreen: 'Login'
        };

        this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
    }

    onUsernameSubmitted(username) {
        fetch('http://localhost:3000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username }),
        })
            .then(response => {
                this.setState({
                    currentUsername: username,
                    currentScreen: 'App'
                })
            })
    }

    render() {
        if(this.state.currentScreen === 'Login'){
            return <UsernameForm onSubmit={this.onUsernameSubmitted}/>
        }
        if (this.state.currentScreen === 'App') {
            return <App currentUsername={this.state.currentUsername}/>
        }
    }
}

export default login;