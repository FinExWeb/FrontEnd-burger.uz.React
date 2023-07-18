import React from 'react';
import '../Login/Login.css'
import Navbar from '../../Navbar/Navbar'
import { Link } from 'react-router-dom';
const Reset = () => {
    return (
        <>
            <div className='container'>
                <div className="navbarMenu">
                    <Navbar />
                </div>
                <div className="cardForm d-flex justify-content-center align-items-center" style={{ height: '75vh' }}>
                    <div className="wrapper">
                        <header>
                            <span>qayta tiklash</span>
                        </header>
                        <form>
                            <div className="field email">
                                <div className="input-area">
                                    <input type="text" placeholder="YANGI EMAILNI KIRITING" />
                                </div>
                            </div>
                            <br />
                            <Link className='buttonsSubmit' to='#'>
                                <input type="submit" value="tiklash" />
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

export default Reset;