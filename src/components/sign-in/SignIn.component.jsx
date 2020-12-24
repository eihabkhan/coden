import React, { Component } from 'react'

import {
    SignInContainer,
    SignInTitle,
    SignInButtonsContainer
} from './SignIn.styles'

import FormInput from '../form-input/FormInput.component'
import CustomButton from '../custom-button/CustomButton.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

export default class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault()

        const {email, password} = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
            
        }catch(err) {
            console.error(err);
        }

    }

    handleChange = e => {
        const {value, name} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
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
                        <CustomButton onClick={signInWithGoogle} isGoogleLogin>Sign in with Google</CustomButton>
                    </SignInButtonsContainer>
                </form>
            </SignInContainer>
        )
    }
}
