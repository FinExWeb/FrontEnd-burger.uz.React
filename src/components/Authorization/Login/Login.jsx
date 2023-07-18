import React from 'react';
import './Login.css'
import Navbar from '../../Navbar/Navbar'
import { Link } from 'react-router-dom';
const LoginForm = () => {
    return (
        <>
            <div className='container'>
                <div className="navbarMenu">
                    <Navbar />
                </div>
                <div className="cardForm d-flex justify-content-center align-items-center" style={{ height: '75vh' }}>
                    <div className="wrapper">
                        <header>
                            <span>Kirish</span>
                        </header>
                        <form>
                            <div className="field email">
                                <div className="input-area">
                                    <input type="text" placeholder="EMAILNI KIRITING" />
                                </div>
                            </div>
                            <div className="field password">
                                <div className="input-area">
                                    <input type="password" placeholder="PAROLNI KIRITING" />
                                </div>
                            </div>
                            <div className="pass-txt">
                                <Link to="/reset">Parolni esdan chiqardingizmi?</Link>
                            </div>
                            <Link className='buttonsSubmit' to='#'>
                                <input type="submit" value="Yuborish" />
                            </Link>
                        </form>
                        <div className="sign-txt">
                            <p>Accountingiz yo’qmi? <Link to="/register">Ro’yhatdan o’tish</Link></p>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <p>Barcha ma’lumotlar himoya qilinadi</p>
                    <p>Copyright 2023.FinEx</p>
                </div>
            </div>
        </>
    );
};

export default LoginForm;