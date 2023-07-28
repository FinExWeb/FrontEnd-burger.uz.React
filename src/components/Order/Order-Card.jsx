import React, { useEffect, useState } from 'react';
import './Order-Card.css';
import home from '../../img/home-icon.svg';
import product from '../../img/product-icon.svg';
import cart from '../../img/icon/cart.svg';
import check from '../../img/icon/check.svg';

function OrderCard() {
    const [order, setOrder] = useState(false);
    const orderclikcbtn = () => {
        setOrder(prev => !prev);
    };

    const shops = JSON.parse(localStorage.getItem('shop'));

    const [productCounts, setProductCounts] = useState({});

    useEffect(() => {
        if (shops) {
            const initialCounts = {};
            shops.forEach(el => {
                initialCounts[el._id] = el.count || 0;
            });
            setProductCounts(initialCounts);
        }
    }, []);

    const handleAddProductCount = productId => {
        setProductCounts(prevState => ({
            ...prevState,
            [productId]: prevState[productId] + 1,
        }));
    };

    const handleClearProductCount = productId => {
        setProductCounts(prevState => ({
            ...prevState,
            [productId]: Math.max(prevState[productId] - 1, 0),
        }));
    };

    const getTotalPrice = () => {
        let totalPrice = 0;
        if (shops) {
            shops.forEach(el => {
                const price = parseInt(el.price.replace(/,/g, ''));
                totalPrice += price * productCounts[el._id];
            });
        }
        return totalPrice;
    };

    const totalProductsReceived = (productId) => {
        if (shops && productCounts[productId]) {
            return productCounts[productId];
        }
        // 770456260
        return 0;
    };

    const totalPrice = getTotalPrice();
    useEffect(() => {
        localStorage.setItem('totalPrice', totalPrice);
    }, [productCounts]);

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="45" viewBox="0 0 47 45" fill="none">
                <path d="M16.6667 3C11.7046 10.8359 7.61367 19.1607 3 27.2031" stroke="#6C5FBC" stroke-width="4.78333" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M41.2668 3C29.5782 12.2437 18.6728 22.9633 8.4668 33.9261" stroke="#6C5FBC" stroke-width="4.78333" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M43.9997 28.5479C34.4604 30.2883 21.784 37.516 12.5664 41.994" stroke="#6C5FBC" stroke-width="4.78333" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div className="order-cards my-5">
                {shops
                    ? shops.map(el => (
                        <div className="card-control my-2" key={el._id}>
                            <div className="img-content">
                                <img src={'http://localhost:5000/images/' + el.img} alt="palov" />
                                <div className="mx-3">
                                    <h5>{el.foodName}</h5>
                                    <h5>{el.price}</h5>
                                </div>
                            </div>

                            <div className="price-content d-flex align-items-center justify-conten-center flex-column">
                                <div className="pulse-minuse my-1">
                                    <button onClick={() => handleClearProductCount(el._id)}>
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <span>{productCounts[el._id]}</span>
                                    <button className="buttons" onClick={() => handleAddProductCount(el._id)}>
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                                <h6 className='setting'>{totalProductsReceived(el._id)} ta qabul qilindi</h6>
                            </div>
                        </div>
                    ))
                    : ''}
            </div>

            <div className="order-price my-5">
                <div className="contents d-flex justify-content-around p-5">
                    <h3>Jami tolovingiz:</h3>
                    <h3 className="result-price">{totalPrice.toLocaleString()}.000 so'm</h3>
                </div>
                <div className="btns my-4 d-flex justify-content-center">
                    <button onClick={orderclikcbtn}>BUYURTMALARNI AMALGA OSHIRISH</button>
                </div>
            </div>

            {
                order ? (
                    <div className="container">
                        <div className="row modal--button">
                            <div className="col">
                                <h2 onClick={orderclikcbtn} style={{ cursor: 'pointer' }}>
                                    <i className='fa fa-close'></i>
                                </h2>
                            </div>

                            <div className="row buttons">
                                <div className="col border-app align-items-center">
                                    <img src={home} alt="home" />
                                    <span>Uyga <br />
                                        yetkazish</span>
                                </div>
                                <div className="col border-app align-items-center">
                                    <img className='product' src={product} alt="product" />
                                    <span>Offisdan <br />
                                        olib ketish</span>
                                </div>
                            </div>

                            <div className="row forms">
                                <div className="col">
                                    <label htmlFor="name">Ismingizni kiriting</label>
                                    <input type="text" id='name' placeholder='Ismingizni kiriting' />
                                </div>
                                <div className="col">
                                    <label htmlFor="surname">Familyanginzi kiriting</label>
                                    <input type="text" id='surname' placeholder='Familyanginzi kiriting' />
                                </div>
                                <div className="col">
                                    <label htmlFor="phone">Raqamingizni kiriting</label>
                                    <input type="text" id='phone' placeholder='Telefon raqamingizni kiriting' />
                                </div>
                            </div>

                            <div className="row submit">
                                <div className="col cartIs">
                                    <img src={cart} alt="" cart />
                                    <p>Yetkazilganidan <br />
                                        keyin to’lov <br />
                                        amalaga oshiriladi</p>
                                </div>
                                <div className="col buttonSubmit">
                                    <button>
                                        <img src={check} alt="check" />
                                    </button>
                                    <button>YUBORISH</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ''
            }
        </>
    )
}

export default OrderCard;