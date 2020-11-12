import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css';

import Homepage from './pages/homepage/Homepage.component'
import Shoppage from './pages/shop/Shop.component'
import Header from './components/header/Header.component'
import SignInPage from './pages/sign-in/SignIn.component'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shoppage} />
        <Route path='/login' component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
