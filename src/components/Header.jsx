import React from 'react'
import NavbarMenu from './Navbar/Navbar'
import HeaderApp from './Header/HeaderApp'
import Card from './Card/Card'
import './Header.css'
function Header() {
    return (
        <div className='container'>
            <div className="navbarMenu">
                <NavbarMenu />
            </div>
            <div className="header">
                <HeaderApp />
            </div>
            <hr />
            <div className="foods my-5">
                <Card />
            </div>
            <hr className='my-2' />
        </div>
    )
}

export default Header