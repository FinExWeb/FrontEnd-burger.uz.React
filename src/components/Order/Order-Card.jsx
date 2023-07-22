import React, { useState } from 'react'
import './Order-Card.css'
import palov from '../../img/palov.png'
import home from '../../img/home-icon.svg'
import product from '../../img/product-icon.svg'
import cart from '../../img/icon/cart.svg'
import check from '../../img/icon/check.svg'
import NavbarMenu from '../Navbar/Navbar'

function OrderCard() {
    const [count, setCount] = useState(0);
    const handleAddCount = () => {
        setCount(count + 1)
    }
    const handleClearCount = () => {
        setCount(count - 1)
    }
    const [order, setOrder] = useState(false)
    const orderclikcbtn = (() => {
        setOrder(prev => !prev)
    })
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="45" viewBox="0 0 47 45" fill="none">
                <path d="M16.6667 3C11.7046 10.8359 7.61367 19.1607 3 27.2031" stroke="#6C5FBC" stroke-width="4.78333" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M41.2668 3C29.5782 12.2437 18.6728 22.9633 8.4668 33.9261" stroke="#6C5FBC" stroke-width="4.78333" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M43.9997 28.5479C34.4604 30.2883 21.784 37.516 12.5664 41.994" stroke="#6C5FBC" stroke-width="4.78333" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div className="order-cards my-5">
                <div className='card-control'>
                    <div className="img-content">
                        <img src={palov} alt="palov" />
                        <div className='mx-3'>
                            <h5>Tuxum qo'shilgan palov!</h5>
                            <h5>12.000 so'm</h5>
                        </div>
                    </div>

                    <div className="price-content d-flex align-items-center justify-conten-center flex-column">
                        <div className="pulse-minuse my-1">
                            <button onClick={handleClearCount}>
                                <i className='fas fa-minus'></i>
                            </button>
                            <span>{count}</span>
                            <button className='buttons' onClick={handleAddCount}>
                                <i className='fas fa-plus'></i>
                            </button>
                        </div>
                        <h6>23.000 so'm</h6>
                    </div>
                </div>
            </div>

            <div className="order-price my-5">
                <div className="contents d-flex justify-content-around p-5">
                    <h3>Jami tolovingiz:</h3>
                    <h3>450.000 so'm</h3>
                </div>
                <div className="btns my-4 d-flex justify-content-center">
                    <button onClick={orderclikcbtn}>BUYURTMALARNI AMALGA OSHIRISH</button>
                </div>
            </div>

            {
                order ? (
                    <div className="container">
                        <div className="modal--button ActiveOrderAimation">
                            <div className="d-flex justify-content-end">
                                <h4 onClick={orderclikcbtn}><i className='fa fa-close'></i></h4>
                            </div>
                            <nav>
                                <p>YETKAZIB BERISH HIZMATI</p>
                            </nav>
                            <main>
                                <div className="buttons">
                                    <div className="button">
                                        <img src={home} alt="home" />
                                        <p>Uyga yetkazish</p>
                                    </div>
                                    <div className="button">
                                        <img src={product} alt="" />
                                        <p>Uyga yetkazish</p>
                                    </div>
                                </div>
                                <form>
                                    <div className="person--name">
                                        <section>
                                            <label htmlFor="name">Ismingizni kiriting</label>
                                            <label htmlFor="name">Aniq ma’lumot!</label>
                                        </section>
                                        <input type="text" placeholder='Ismingizni kiriting' id='name' />
                                    </div>
                                    <div className="person--surname">
                                        <section>
                                            <label htmlFor="surname">Familyangizni kiriting</label>
                                            <label htmlFor="surname">Aniq ma’lumot!</label>
                                        </section>
                                        <input type="text" placeholder='Familyangizni kiriting' id='surname' />
                                    </div>
                                    <div className="person--phone">
                                        <section>
                                            <label htmlFor="phone">Telefon raqamingizni kiriting</label>
                                            <label htmlFor="phone">Aniq ma’lumot!</label>
                                        </section>
                                        <input type="number" placeholder='Telefon raqamingizni kiriting' id='phone' />
                                    </div>
                                </form>
                            </main>

                            <footer>
                                <div className="payment">
                                    <img src={cart} alt="cart" />
                                    <p>Yetkazilganidan keyin to’lov amalaga oshiriladi</p>
                                </div>

                                <div className="payment--button">
                                    <div className="cart">
                                        <img src={check} alt="cart" />
                                    </div>
                                    <button>YUBORISH</button>
                                </div>
                            </footer>
                        </div>
                    </div>
                ) : ''
            }
        </>
    )
}

export default OrderCard;