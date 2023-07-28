import React from 'react'
import Nav from '../Navigator/Nav'
import Sidebar from '../Sidebar/Sidebar'
import './Dashboard.css'
import userIcon from './img/user-cart.svg'
import CreditCart from './creditCart'

function Dashboard() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4" style={{ padding: '0' }}>
                        <Sidebar />
                    </div>
                    <div className="col">
                        <Nav />
                        <div className="main my-5 d-flex">
                            <div className='cart-edit-human'>
                                <div className="cart--edit--profils">
                                    <h3 className='nav--text'>Ma’lumotlarni yangilash</h3>

                                    <div className="user--information my-3">
                                        <span>Xozirgi ma’lumotlaringiz</span>
                                        <div className="user--cart d-flex align-items-center my-2">
                                            <img src={userIcon} alt="userIcon" />
                                            <section>
                                                <h3>Sadullayev Ixtiyor</h3>
                                                <small>ixtiyorJonquin@gmail.com</small>
                                            </section>
                                        </div>
                                    </div>
                                    <hr className='my-1' />
                                    <div className="row forms">
                                        <div className="col d-flex align-items-center justify-content-center">
                                            <div className="row">
                                                <div className="col">
                                                    <label htmlFor="name">Ismingizni kiriting</label>
                                                    <input type="text" id='name' required placeholder='Yangi ism' />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="surname">Familyangizni kiritng</label>
                                                    <input type="text" required id='surname' placeholder='Yangi familya' />
                                                </div>
                                            </div>
                                            {/*  */}
                                            <div className="row">
                                                <div className="col">
                                                    <label htmlFor="email">Yangi email kiritng</label>
                                                    <input type="email" id='email' required placeholder='Yangi email' />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="password">Yangi parol kiriting</label>
                                                    <input type="password" required id='password' placeholder='Yangi parol' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button>Yuborish</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="attention">
                                    <p>Diqqat! <br />
                                        O’zgartirilgan ma’lumotlarni <br />
                                        orqaga qaytarib bo’lmaydi!</p>
                                </div>
                            </div>
                            
                            <CreditCart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard