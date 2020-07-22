import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import Home from './HomeComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Splash from './SplashComponent';
import News from './NewsComponent';

class Main extends Component {
    render() {
        return (
            <Router>
                <>
                    <Splash />
                    <div>
                        <Menu />
                    </div>
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/news' component={News} />
                        <Redirect to='/home' />
                    </Switch>
                </>
            </Router>
        );
    }
}

export default Main;