import React from 'react'
import user from '../DashboardRoutes/img/user-cart.svg'

function ViewAdmins({users}) {
    return (
        <>
            <div className="credit--cart mx-5">
                <h3 className='text-center' style={{ color: '#064061' }}>Qo’shilgan adminlar</h3>
                <div className="cart-added-admins">
                    <div className="col">
                        <span className='my-2 d-block'>ADMINLAR</span>
                        {
                            users ? users.map(el => (
                                <div className="user--cart-map">
                                    <img src={user} alt="user" />
                                    <section>
                                        <h3 className='fullname-sec'>{el.name} {el.surname}</h3>
                                        <small>{el.email}</small>
                                    </section>
                                </div>
                            )) : ''
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewAdmins