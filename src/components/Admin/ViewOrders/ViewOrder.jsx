import React from 'react'
import Nav from '../Navigator/Nav'
import Sidebar from '../Sidebar/Sidebar'
import OrdersProduct from './Orders'

function ViewOrders() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4" style={{ padding: '0' }}>
                        <Sidebar />
                    </div>
                    <div className="col col-xl-8">
                        <Nav />
                        <div className="main my-5">
                            <OrdersProduct />   
                            <OrdersProduct />   
                            <OrdersProduct />   
                            <OrdersProduct />   
                            <OrdersProduct />   
                            <OrdersProduct />   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewOrders