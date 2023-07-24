import React from 'react'
import Search from '../adminIcons/Search.svg'
import User from '../adminIcons/UserApp.svg'
import './nav.css'
function Nav() {
    return (
        <>
            <div className="navbar-app">
                <h3>ADMIN BO'LIMI</h3>
                <form>
                    <label htmlFor="Search">
                        <img src={Search} alt="Search" />
                    </label>
                    <input id='Search' type="text" placeholder='Qidirish' />
                </form>
                <div className="user">
                    <img src={User} alt="User" />
                </div>

            </div>
        </>
    )
}

export default Nav