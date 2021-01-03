import React, { Component } from 'react'
import {connect} from 'react-redux'

import {
    SignInContainer,
    SignInTitle,
    SignInButtonsContainer
} from './SignIn.styles'

import FormInput from '../form-input/FormInput.component'
import CustomButton from '../custom-button/CustomButton.component'

import {googleSignInStart, emailSignInStart } from '../../redux/user/user.actions' 

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault()
        const {emailSignInStart} = this.props
        const {email, password} = this.state

        emailSignInStart(email, password)
        

    }

    handleChange = e => {
        const {value, name} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const { googleSignInStart } = this.props
        return (
            <SignInContainer>
                <SignInTitle>Already Have an account?</SignInTitle>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text" 
                        name='email' 
                        label='email'
                        value={this.state.email} 
                        required
                        handleChange={this.handleChange}
                    />                    
                    <FormInput 
                        type="password" 
                        name='password' 
                        label='password'
                        value={this.state.password} 
                        required
                        handleChange={this.handleChange}
                    />
                    <SignInButtonsContainer>
                        <CustomButton type="submit">Login</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleLogin>Sign in with Google</CustomButton>
                    </SignInButtonsContainer>
                </form>
            </SignInContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)