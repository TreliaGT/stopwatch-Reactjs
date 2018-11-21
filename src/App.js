import React, {Component} from 'react';
import './App.css';
import UsernameForm from './Pages/Login';
import MainPage from './Pages/MainPage';


class App extends Component {
    constructor() {
        super();
    }


    render() {
        return (

            <MainPage/>
        );
        }
    }



export default App;