import React, {Component} from 'react';
import '../App.css';
import AppHeader from '../Components/AppHeader';
import {BrowserRouter} from 'react-router-dom';
import Routes from '../routes/Routes';


class MainPage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <AppHeader/>
                    <Routes/>
                </div>
            </BrowserRouter>
        );
    }
}

export default MainPage;