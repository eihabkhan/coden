import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './App.css';

import Header from './components/header/Header.component'

import HomePage from './pages/homepage/Homepage.component'
import ShopPage from './pages/shop/Shop.component'
import SignInPage from './pages/sign-in/SignIn.component'
import CheckoutPage from './pages/checkout/Checkout.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selector'


class App extends Component {  

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props; 

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({          
              id: snapshot.id,
              ...snapshot.data()            
          })
        })        
      } else {
        setCurrentUser(userAuth)
      }

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  

  render() {
    return (
      <div>
        <Header />
        <Switch>
          {/* {match, location, history are props that are automatically passed to the components that use Route} */}
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route exact path='/login' 
            render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInPage />) } 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
