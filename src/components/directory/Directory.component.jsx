import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {selectDirectorySection} from '../../redux/directory/directory.selectors'

import { DirectoryMenuContainer } from './Directory.styles'
import MenuItem from '../menu-item/MenuItem.component'

const Directory = ({sections}) => (
            <DirectoryMenuContainer>               
                {
                    sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </DirectoryMenuContainer>
)

// RULE OF THUMB: whenever there is mapStateToProps, you almost always want to use reselect
const mapStateToProps = createStructuredSelector({
        sections: selectDirectorySection
    })

export default connect(mapStateToProps)(Directory) 