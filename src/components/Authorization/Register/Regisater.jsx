import React from 'react';
import '../Login/Login.css'
import Navbar from '../../Navbar/Navbar'
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <>
            <div className='container'>
                <div className="navbarMenu">
                    <Navbar />
                </div>
                <div className="cardForm d-flex justify-content-center align-items-center" style={{ height: '75vh' }}>
                    <div className="wrapper">
                        <header>
                            <span>ro'yhatdan o'ting</span>
                        </header>
                        <form>
                        <div className="field phone">
                                <div className="input-area">
                                    <input type="text" placeholder="TELEFON RAQAM KIRITING" />
                                </div>
                            </div>
                            <div className="field email">
                                <div className="input-area">
                                    <input type="text" placeholder="YANGI EMAILNI KIRITING" />
                                </div>
                            </div>
                            <div className="field password">
                                <div className="input-area">
                                    <input type="password" placeholder="YANGI PAROLNI KIRITING" />
                                </div>
                            </div>
                            <Link className='buttonsSubmit' to='#'>
                                <input type="submit" value="Yuborish" />
                            </Link>
                        </form>
                        <div className="sign-txt">
                            <p>Account mavjudmi? <Link to="/login">Kirish</Link></p>
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

export default Register;