import React from 'react'

import './SignIn.styles.scss'

import SignIn from '../../components/sign-in/SignIn.component'
import SignUp from '../../components/sign-up/SignUp.component'

const SignInPage = () => (
            <div className='login-join'>
                <SignIn />
                <SignUp />
            </div>
)

export default SignInPage