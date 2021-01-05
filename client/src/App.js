import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './App.css';

import Header from './components/header/Header.component'

import HomePage from './pages/homepage/Homepage.component'
import ShopPage from './pages/shop/Shop.component'
import SignInPage from './pages/sign-in/SignInPage.component'
import CheckoutPage from './pages/checkout/Checkout.component'

import {selectCurrentUser} from './redux/user/user.selector'

import {checkUserSession} from './redux/user/user.actions'

const App = ({ checkUserSession, currentUser }) => {  
  useEffect(()=> {
    checkUserSession()
  }, [checkUserSession])

  
  return (
    <div>
      <Header />
      <Switch>
        {/* {match, location, history are props that are automatically passed to the components that use Route} */}
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route exact path='/login' 
          render={() => currentUser ? (<Redirect to='/'/>) : (<SignInPage />) } 
        />
      </Switch>
    </div>
  );  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
