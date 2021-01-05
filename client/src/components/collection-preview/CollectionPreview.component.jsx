import React from 'react'
import {
    CollectionPreviewContainer,
    PreviewContainer,
    TitleContainer
} from './CollectionPreview.styles'
import CollectionItem from '../collection-item/CollectionItem.component'

const  CollectionPreview = ({title, items}) => (
        <CollectionPreviewContainer>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <PreviewContainer>
            {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
            </PreviewContainer>
        </CollectionPreviewContainer>
    )


export default CollectionPreview