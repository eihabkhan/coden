import React from 'react'

import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel
} from './FormInput.styles'

const FormInput = ({handleChange, label, ...otherProps}) => (
    <GroupContainer>
        <FormInputContainer type="email" onChange={handleChange} {...otherProps}/>
        {
            label ? 
                (
                    <FormInputLabel className={
                        otherProps.value.length ? 'shrink' : ''}
                    >
                        {label}
                    </FormInputLabel>
                )
            : null

        }
    </GroupContainer>
)

export default FormInput