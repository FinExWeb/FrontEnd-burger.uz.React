import { Link } from 'react-router-dom';
import './Navbar.css'
import home from '../../img/home.svg'
import menuApp from '../../img/menuApp.svg'
import pricing from '../../img/pricing.svg'
import email from '../../img/email.svg'
import bars from '../../img/bars.svg'
import logo from '../../img/Logo.svg'
import './Navbar.css'
import { useState } from 'react';
const NavbarMenu = () => {
    const [barss, setBarss] = useState(false)
    const BarsClikedBtn = () => {
        setBarss(prev => !prev)
    }
    return (
        <>
            <div className="navbar">
                <img src={logo} alt="logo" />

                <ul>
                    <li className='d-flex align-items-center'>
                        <Link className='text-decoration-none' to='/'>Asosiy</Link>
                        <img style={{ width: '25px', margin: '0 10px' }} src={home} alt="home" />
                    </li>
                    {/*  */}
                    <li className='d-flex align-items-center'>
                        <Link className='text-decoration-none' to='/menu'>Menu</Link>
                        <img style={{ width: '25px', margin: '0 10px' }} src={menuApp} alt="menu" />
                    </li>
                    {/*  */}
                    <li className='d-flex align-items-center'>
                        <Link className='text-decoration-none' to='/problem'>Shikoyat</Link>
                        <img style={{ width: '25px', margin: '0 10px' }} src={email} alt="email" />
                    </li>
                </ul>

                <div className="login d-flex">
                    <button className='borderControl'>
                        <Link className='text-decoration-none' to='/login'>Kirish</Link>
                    </button>
                    <button className='borderNaN'>
                        <Link className='text-decoration-none' to='/register'>Yaratish</Link>
                    </button>
                </div>
            </div>

            <div className="navbar-media">
                <div className="header d-flex justify-content-around py-4">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className='bars'>
                        <img src={bars} onClick={BarsClikedBtn} style={{ width: '35px' }} alt="" />
                    </div>
                </div>
                {
                    barss ? (
                        <div className="Nav-Body">
                            <button className='classclosebtn btn btn-primary' onClick={BarsClikedBtn}>
                                <i className='fas fa-close'></i>
                            </button>
                            <ul>
                                <li className='d-flex align-items-center'>
                                    <Link className='text-decoration-none' to='/'>Asosiy</Link>
                                    <img style={{ width: '25px', margin: '0 10px' }} src={home} alt="home" />
                                </li>
                                {/*  */}
                                <li className='d-flex align-items-center'>
                                    <Link className='text-decoration-none' to='/menu'>Menu</Link>
                                    <img style={{ width: '25px', margin: '0 10px' }} src={menuApp} alt="menu" />
                                </li>
                                {/*  */}
                                <li className='d-flex align-items-center'>
                                    <Link className='text-decoration-none' to='/price'>Narxlar</Link>
                                    <img style={{ width: '25px', margin: '0 10px' }} src={pricing} alt="price" />
                                </li>
                                {/*  */}
                                <li className='d-flex align-items-center'>
                                    <Link className='text-decoration-none' to='/problem'>Shikoyat</Link>
                                    <img style={{ width: '25px', margin: '0 10px' }} src={email} alt="email" />
                                </li>
                            </ul>

                            <div className="login d-flex">
                                <button className='borderControl'>
                                    <Link className='text-decoration-none' to='/login'>Kirish</Link>
                                </button>
                                <button className='borderNaN'>
                                    <Link className='text-decoration-none' to='/register'>Yaratish</Link>
                                </button>
                            </div>
                        </div>
                    ) : ''
                }
            </div>
            <hr />
        </>
    );
};

export default NavbarMenu;