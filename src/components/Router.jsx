import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Menu from './MenuPage/Menu'
import Order from './Order/Order'
import Problem from './Problem/Problem'
import LoginForm from './Authorization/Login/Login'
import Register from './Authorization/Register/Regisater'
import Reset from './Authorization/ResetPass/ResetPass'
import News from './News/News'
function Router() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Header />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/order' element={<Order />} />
                <Route path='/problem' element={<Problem />} />
                <Route path='/login' element={<LoginForm />} />
                <Route path='/news' element={<News />} />
                <Route path='/register' element={<Register />} />
                <Route path='/reset' element={<Reset />} />
            </Routes>
        </div>
    )
}

export default Router