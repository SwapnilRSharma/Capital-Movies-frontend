import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/login';
import HomePage from './components/HomePage';

 const AppRouters = () => (
    <BrowserRouter>
        <Route path="/" component={HomePage} exact="true" ></Route>
        <Route path="/Login" component={Login} exact="true" ></Route>
        
    </BrowserRouter>
)

export default AppRouters;