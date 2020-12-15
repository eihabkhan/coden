import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {selectDirectorySection} from '../../redux/directory/directory.selectors'

import './Directory.styles.scss'
import MenuItem from '../menu-item/MenuItem.component'

const Directory = ({sections}) => (
            <div className="directory-menu">               
                {
                    sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
)

// RULE OF THUMB: whenever there is mapStateToProps, you almost always want to use reselect
const mapStateToProps = createStructuredSelector({
        sections: selectDirectorySection
    })

export default connect(mapStateToProps)(Directory) 