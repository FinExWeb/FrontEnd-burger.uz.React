import React from 'react'
import NavbarMenu from '../Navbar/Navbar'
import OrderCard from './Order-Card'
import './Order.css'
import home from '../../img/home-icon.svg'
import product from '../../img/product-icon.svg'
import cart from '../../img/icon/cart.svg'
import check from '../../img/icon/check.svg'
export default function Order() {
    return (
        <>
            <div className="container">
                <div className="navbarMenu">
                    <NavbarMenu />
                </div>
                <div className="orders">
                    <OrderCard />
                </div>
            </div>
        </>
    )
}
