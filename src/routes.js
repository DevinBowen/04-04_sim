import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';

export default (
    <Switch>
        
         <Route exact path='/' component={Home} />
         <Route path='/menu' component={Menu} />
         
    </Switch>
)
