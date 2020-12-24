import styled, {css} from 'styled-components'

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
    }
`


const invertedButtonStyles = css`
    background-color: white;
    color: black;

    &:hover {
      background-color: black;
      color: white;
    }
`

const googleLoginStyles = css`
    background-color: #4285f4;
    border: 1px solid #4285f4;

    &:hover {
    background-color: #2d68c7;
    color: #fff;
    }
`

const getButtonStyles = props => {
    if(props.isGoogleLogin){
        return googleLoginStyles
    }

    return props.inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: bolder;
    cursor: pointer;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    transition: all 0.2s ease-in;
    
    ${getButtonStyles}
`