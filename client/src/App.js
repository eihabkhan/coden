import React, { useEffect, lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './App.css';

import Header from './components/header/Header.component'
import Spinner from './components/spinner/Spinner.component'
import ErrorBoundary from './components/error-boundary/ErrorBoundary.comopnent'

import {GlobalStyle} from './global.styles'

import {selectCurrentUser} from './redux/user/user.selector'
import {checkUserSession} from './redux/user/user.actions'

const HomePage = lazy(() => import('./pages/homepage/Homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/Shop.component'))
const SignInPage = lazy(() => import('./pages/sign-in/SignInPage.component'))
const CheckoutPage = lazy(() => import('./pages/checkout/Checkout.component'))

const App = ({ checkUserSession, currentUser }) => {  
  useEffect(()=> {
    checkUserSession()
  }, [checkUserSession])

  
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>      
          <Suspense fallback={<Spinner />}>
            {/* {match, location, history are props that are automatically passed to the components that use Route} */}
            <Route exact path='/' component={HomePage} />        
            <Route path='/shop' component={ShopPage} />
            <Route path='/checkout' component={CheckoutPage} />
            <Route exact path='/login' 
              render={() => currentUser ? (<Redirect to='/'/>) : (<SignInPage />) } 
              />
          </Suspense>
        </ErrorBoundary>
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
