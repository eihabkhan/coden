import React from 'react'

import './CustomButton.styles.scss'

const CustomButton = ({children, isGoogleLogin, inverted ,...otherProps}) => (
    <button className={`${inverted ? 'inverted': ''} custom-button`} {...otherProps}>
        {children}
    </button>
)


export default CustomButton