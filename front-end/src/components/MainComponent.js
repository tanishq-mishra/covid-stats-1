import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import Home from './HomeComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';

class Main extends Component {
    render() {
        return (
            <Router>
                <>
                    <div><Menu /></div>
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/about' component={About} />
                        <Redirect to='/home' />
                    </Switch>
                </>
            </Router>
        );
    }
}

export default Main;