import styled from 'styled-components'

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;

    @media screen and (max-width: 800px) {
        align-items: center
    }
`
export const TitleContainer = styled.div`
    font-size: 28px;
    /* width: 40%; */
    padding-bottom: 1rem;
    margin-bottom: 25px;
    border-bottom: 2px solid black;
    
`

    export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 15px;
    }
`
