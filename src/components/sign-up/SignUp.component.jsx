import React, { Component } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/FormInput.component'
import CustomButton from '../custom-button/CustomButton.component'

import {signUpStart} from '../../redux/user/user.actions'

import {
    SignUpContainer,
    SignUpTitle
} from './SignUp.styles'

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault()

        const {signUpStart} = this.props
        const {displayName, email, password, confirmPassword} = this.state

        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return
        }

        signUpStart({email, password, displayName})
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <SignUpContainer>
                <SignUpTitle>New to Coden?</SignUpTitle>
                <span>Sign up with email</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Username'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email Address'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: credentials => dispatch(signUpStart(credentials))
})

export default connect(null, mapDispatchToProps)(SignUp)