import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from '../pages/auth/LoginForm';
import RequiredAuthentication from '../hoc/RequiredAuthentication';
import Layout from '../layout/Layout';
import Found404 from '../pages/404/Found404';

const RouterApp = props => {
    return (
        <BrowserRouter >
            <Switch>
                <Route path='/' exact component={LoginForm} />
                <Route path='/pages' component={RequiredAuthentication(Layout)} />
                <Route component={Found404} />
            </Switch>
        </BrowserRouter>
    );
}

export default RouterApp;