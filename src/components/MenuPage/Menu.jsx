import React from 'react'
import NavbarMenu from '../Navbar/Navbar'
import Card from '../Card/Card'
import './Menu.css'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
function Menu() {
    return (
        <>
            <div className='container'>
                <div className="navbarMenu">
                    <NavbarMenu />
                </div>
                <div className="content-card my-5">
                    <h2>ASOSIY OVQATLAR <span>MENYUSI</span></h2>
                </div>
                <hr />
                <div className="foods my-5">
                    <Card />
                </div>
                <hr />
                <div className="order my-4">
                    <Link to='/order' className='d-flex justify-content-center'>
                        <button>BUYURTMALARNI KO'RISH</button>
                    </Link>
                </div>
                <hr />
            </div>
            <Footer />
        </>
    )
}

export default Menu