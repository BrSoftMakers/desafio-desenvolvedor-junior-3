import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from '../components/home/Home';
import Register from '../components/register/Register';
import Login from '../components/login/Login';
import Write from '../components/write/Write';
import Single from '../components/home/single/single';
import Setting from '../components/setting/Setting';

export default function Routes() {
const user = false;
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path="/login" component={user ? Home : Login}/>
                <Route path="/register" component={user ? Home : Register}/>
                <Route path="/setting" component={user ? Setting : Register}/>
                <Route path="/write" component={user ? Write : Register}/>
                <Route path="/post/:postId" component={Single}/>
            </Switch>
        </BrowserRouter>        
    );
}
