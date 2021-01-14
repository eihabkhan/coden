import React, { Component } from 'react'

import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './ErrorBoundary.styles'

class ErrorBoundary extends Component {
    constructor() {
        super()
        this.state = {
            hasErrored: false
        }
    }


    static getDerivedStateFromError(error) {
        return { hasErrored: true }
    }

    componentDidCatch(error, info) {
        console.log(error)
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl={"https://i.imgur.com/A040Lxr.png"}/>
                    <ErrorImageText>This Page is Lost in Space</ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary