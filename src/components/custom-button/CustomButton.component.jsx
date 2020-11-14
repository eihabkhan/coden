import React from 'react'

import './CustomButton.styles.scss'

const CustomButton = ({children, isGoogleLogin ,...otherProps}) => (
    <button className={`${isGoogleLogin ? 'google-login': ''} custom-button`} {...otherProps}>
        {children}
    </button>
)


export default CustomButton