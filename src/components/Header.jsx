import React from 'react'
import NavbarMenu from './Navbar/Navbar'
import HeaderApp from './Header/HeaderApp'
import Card from './Card/Card'
import './Header.css'
import { Link } from 'react-router-dom'
import Footer from './Footer/Footer'
function Header() {
    return (
        <>
            <div className='container'>
                <div className="navbarMenu">
                    <NavbarMenu />
                </div>
                <div className="header">
                    <HeaderApp />
                </div>
                <hr />
                <div className="content-card my-5">
                    <h2>OVQATLAR <span>MENYUSI</span></h2>
                </div>
                <hr />
                <div className="foods my-5">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <hr />
                <div className="content-card my-5 d-flex justify-content-center align-items-center">
                    <Link to='/menu'>
                        <button>BARCHASINI KO'RISH</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Header