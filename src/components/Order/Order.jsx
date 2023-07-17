import React from 'react'
import NavbarMenu from '../Navbar/Navbar'
import OrderCard from './Order-Card'

export default function Order() {
    return (
        <div className="container">
            <div className="navbarMenu">
                <NavbarMenu />
            </div>
            <div className="orders">
                <OrderCard />
            </div>
        </div>
    )
}
