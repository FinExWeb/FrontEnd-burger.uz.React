import React from 'react'
import credit from './img/credit-cart.svg'

function CreditCart() {
    return (
        <>
            <div className="credit--cart mx-5">
                <h3>Sinov rejimda!</h3>
                <section>
                    <img id='credit-app' src={credit} alt="" />
                </section>
                <hr />
                <section className='input--carts'>
                    <h3 className='text-center'>Kelgan daromadlar</h3>
                </section>
                <section className='date'>
                    <span>13 Aprel 2023</span>
                </section>
                <div className="row weeking--cart flex-column">
                    <div className="col">
                        <section>
                            <h3>1 Hafta Ichida</h3>
                            <small>1 va 7 kun ichida </small>
                        </section>
                        <h2>450.000 so’m</h2>
                    </div>
                    <div className="col">
                        <section>
                            <h3>1 OY ICHIDA</h3>
                            <small>1 va 31 kun ichida</small>
                        </section>
                        <h2 style={{ color: '#7DD97B' }}>675.000 so’m</h2>
                    </div>

                    <div className="col">
                        <section>
                            <h3>Hisoblangan daromad</h3>
                            <small>1 oy ichida</small>
                        </section>
                        <h2 style={{ color: '#7DD97B' }}>986.000 so’m</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreditCart;