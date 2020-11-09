import React from 'react'
import './Homepage.styles.scss'

const Homepage = () => {
    return (
        <div className='homepage'>
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Desks</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Monitors</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Keyboards</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Mice</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Headphones</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage