import React, {Component} from 'react';
import HomePage from '../Pages/StopwatchPage';
import SettingPage from '../Pages/Setting';
import HistoryPage from '../Pages/History';
import loginPage from '../Pages/Login';
import NotFound from '../Pages/Error404';
import {Route, Switch} from "react-router-dom";


class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login" component={loginPage}/>
                <Route exact path="/" component={HomePage}/>
                <Route path="/Settings" component={SettingPage}/>
                <Route path="/history" component={HistoryPage}/>

                <Route exact path="*" component={NotFound} />
            </Switch>
        )
    }
}

export default Routes;