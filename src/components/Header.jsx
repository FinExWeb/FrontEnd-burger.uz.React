import React from 'react'
import NavbarMenu from './Navbar/Navbar'
import HeaderApp from './Header/HeaderApp'
function Header() {
    return (
        <div className='container'>
            <div className="navbarMenu">
                <NavbarMenu />
            </div>
            <div className="header">
                <HeaderApp />
            </div>
        </div>
    )
}

export default Header