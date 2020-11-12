import React, { Component } from 'react'

import './SignIn.styles.scss'

export default class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = e => {
        const {value, name} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>Already Have an account?</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name='email' 
                        value={this.state.email} 
                        required
                        onChange={this.handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    
                    <input 
                        type="password" 
                        name='password' 
                        value={this.state.password} 
                        required
                        onChange={this.handleChange}
                    />
                    <label htmlFor="password">Password</label>

                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}
