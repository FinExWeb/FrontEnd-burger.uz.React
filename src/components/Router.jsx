import React from 'react'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'

function Router() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Header />} />
            </Routes>
        </div>
    )
}

export default Router