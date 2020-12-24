import React from 'react'
import { withRouter } from 'react-router-dom'

import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
} from './MenuItem.styles'

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) =>  {
    return (
        <MenuItemContainer size={size}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <BackgroundImageContainer imageUrl={imageUrl}/>
            <ContentContainer>
                <ContentTitle>{title}</ContentTitle>
                <ContentSubtitle>SHOP NOW</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
)
}

export default withRouter(MenuItem)