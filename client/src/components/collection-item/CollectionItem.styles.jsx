import styled from 'styled-components'
import CustomButton from '../custom-button/CustomButton.component'

export const CollectiopnItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    margin-top: 30px; 
    position: relative;
    
    &:hover {
        .image {
          opacity: 0.8;
    }
    
    button {
        opacity: 0.85;
        display: flex;
      }
    }

    @media screen and (max-width: 800px) {
        width: 80vw;
        &:hover {
            .image {
            opacity: unset;
            }
            
            button {
                opacity: unset
            }
        }
    }
`

export const AddButton = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;

    @media screen and (max-width: 800px) {
        display: block;
        opacity: 0.5;
        min-width: unset;
        padding: 0 10px;
    }
`

export const BackgroundImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: bold;
    border-top: 1px solid black;
    padding: 8px;
    margin-bottom: 30px;
` 

export const NameContainer = styled.span`
    width: 80%;
    margin-bottom: 15px;
`
export const PriceContainer = styled.span`
    width: 15%;
`