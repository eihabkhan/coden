import React from 'react'

import './FormInput.styles.scss'

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' type="email" onChange={handleChange} {...otherProps}/>
        {
            label ? 
                (
                    <label className={`${
                        otherProps.value.length ? 'shrink' : ''} form-input-label`
                    }>
                        {label}
                    </label>
                )
            : null

        }
    </div>
)

export default FormInput