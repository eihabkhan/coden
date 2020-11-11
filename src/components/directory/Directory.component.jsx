import React, { Component } from 'react'
import './Directory.styles.scss'

import MenuItem from '../menu-item/MenuItem.component'

export default class Directory extends Component {
    constructor() {
        super()
        this.state = {
            sections: [
                {
                    title: 'Desks',
                    imageUrl: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
                    id: '1',
                    linkUrl: 'hats'
                },
                {
                    title: 'Monitors',
                    imageUrl: 'https://images.unsplash.com/photo-1555940280-66bf87aa823d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
                    id: '2',
                    linkUrl: ''
                },
                {
                    title: 'Keyboards',
                    imageUrl: 'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80',
                    id: '3',
                    linkUrl: ''
                },
                {
                    title: 'Mice',
                    imageUrl: 'https://images.unsplash.com/photo-1587230541442-378d0ab8c5a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3334&q=80',
                    size: 'large',
                    id: '4',
                    linkUrl: ''
                },
                {
                    title: 'Headphones',
                    imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1946&q=80',
                    size: 'large',
                    id: '5',
                    linkUrl: ''
                },
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">               
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }
}
