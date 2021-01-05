import React, { useState } from 'react'
import {connect} from 'react-redux'

import {
    SignInContainer,
    SignInTitle,
    SignInButtonsContainer
} from './SignIn.styles'

import FormInput from '../form-input/FormInput.component'
import CustomButton from '../custom-button/CustomButton.component'

import {googleSignInStart, emailSignInStart } from '../../redux/user/user.actions' 

const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''})

    const {email, password} = userCredentials
    
    const handleSubmit = async e => {
        e.preventDefault()
        const {email, password} = userCredentials

        emailSignInStart(email, password)
    }

    const handleChange = e => {
        const {value, name} = e.target
        setCredentials({...userCredentials, [name]: value })
    }
    
    return (
        <SignInContainer>
            <SignInTitle>Already Have an account?</SignInTitle>
            <span>Sign in with email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    type="text" 
                    name='email' 
                    label='email'
                    value={email} 
                    required
                    handleChange={handleChange}
                />                    
                <FormInput 
                    type="password" 
                    name='password' 
                    label='password'
                    value={password} 
                    required
                    handleChange={handleChange}
                />
                <SignInButtonsContainer>
                    <CustomButton type="submit">Login</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleLogin>Sign in with Google</CustomButton>
                </SignInButtonsContainer>
            </form>
        </SignInContainer>
    )
    
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)