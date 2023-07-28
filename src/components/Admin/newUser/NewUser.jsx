import React from 'react'
import './NewUser.css'
import Sidebar from '../Sidebar/Sidebar'
import Nav from '../Navigator/Nav'
import userIcon from '../DashboardRoutes/img/user-cart.svg'
import ViewAdmins from './viewAdmins'
function NewUser() {
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
                                    <h3 className='nav--text'>Yangi adminlar qo’shish</h3>

                                    <div className="user--information my-3">
                                        <span>ADMIN</span>
                                        <div className="user--cart d-flex align-items-center my-2">
                                            <img src={userIcon} alt="userIcon" />
                                            <section>
                                                <h3>ism va familiya</h3>
                                                <small>user@gmail.com</small>
                                            </section>
                                        </div>
                                    </div>
                                    <hr className='my-1' />
                                    <div className="row forms">
                                        <div className="col d-flex align-items-center justify-content-center">
                                            <div className="row">
                                                <div className="col">
                                                    <label htmlFor="name">Yangi adminning ismi</label>
                                                    <input type="text" id='name' required placeholder='Yangi ism' />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="surname">Yangi adminning familyasi</label>
                                                    <input type="email" required id='surname' placeholder='Yangi familya' />
                                                </div>
                                            </div>
                                            {/*  */}
                                            <div className="row">
                                                <div className="col">
                                                    <label htmlFor="email">Yangi admining emaili</label>
                                                    <input type="email" id='email' required placeholder='Yangi email' />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="password">Yangi adminning paroli</label>
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
                                        Ma’lumotlar to’g’ri kiritng, <br />
                                        xato qilmaslikga xarakat qiling!</p>
                                </div>
                            </div>


                            <ViewAdmins />



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewUser