import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css';

import Homepage from './pages/homepage/Homepage.component'
import Shoppage from './pages/shop/Shop.component'
import Header from './components/header/Header.component'
import SignInPage from './pages/sign-in/SignIn.component'

import { auth } from './firebase/firebase.utils'


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }
  
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log(user);
      this.setState({
        currentUser: user
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  

  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shoppage} />
          <Route path='/login' component={SignInPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
