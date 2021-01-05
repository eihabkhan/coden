import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/FormInput.component'
import CustomButton from '../custom-button/CustomButton.component'

import {signUpStart} from '../../redux/user/user.actions'

import {
    SignUpContainer,
    SignUpTitle
} from './SignUp.styles'

const SignUp = ({signUpStart}) => {
    const [userCredentials, setCredentials] = useState({ 
        displayName: '',
        email:'', 
        password: '', 
        confirmPassword: ''
    })
    
    const {displayName, email, password, confirmPassword} = userCredentials
    
    const handleSubmit = async e => {
        e.preventDefault()    

        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return
        }

        signUpStart({email, password, displayName})
    }

    const handleChange = e => {
        const {name, value} = e.target
        setCredentials({ ...userCredentials, [name]: value})
    }

    return (
        <SignUpContainer>
            <SignUpTitle>New to Coden?</SignUpTitle>
            <span>Sign up with email</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Username'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email Address'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    )
    
}

const mapDispatchToProps = dispatch => ({
    signUpStart: credentials => dispatch(signUpStart(credentials))
})

export default connect(null, mapDispatchToProps)(SignUp)