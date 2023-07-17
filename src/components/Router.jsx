import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Menu from './MenuPage/Menu'
import Order from './Order/Order'
function Router() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Header />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/order' element={<Order />} />
            </Routes>
        </div>
    )
}

export default Router