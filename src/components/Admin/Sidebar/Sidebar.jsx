import React from 'react'
import './Sidebar.css'
import brend from '../../../img/Logo.svg'
import chat from '../adminIcons/chat.svg'
import addFood from '../adminIcons/addFood.svg'
import viewOrder from '../adminIcons/viewOrder.svg'
import dashboard from '../adminIcons/dashboard.svg'
import newUser from '../adminIcons/User.svg'
import { Link } from 'react-router-dom'

function Sidebar() {

    const [hover, setHover] = React.useState('hover')


    return (
        <div className='app-body'>
            <img src={brend} alt="brend" />
            <hr />
            <div className="routes ">
                <Link to='#' className={hover==='hover'? 'hover': ''} onClick={()=> setHover('hover')}>
                    <img src={dashboard} alt="dashboard" />
                    <span>DASHBOARD</span>
                </Link>

                <Link to='#' className={hover==='admin'? 'hover': ''} onClick={()=> setHover('admin')}>
                    <img src={newUser} alt="newUser" />
                    <span>YANGI ADMINLAR QO’SHISH</span>
                </Link>

                <Link to='#' className={hover==='food'? 'hover': ''} onClick={()=> setHover('food')}>
                    <img src={addFood} alt="addFood" />
                    <span>YANGI OVQATLAR QO’SHISH</span>
                </Link>

                <Link to='#' className={hover==='order'? 'hover': ''} onClick={()=> setHover('order')}>
                    <img src={viewOrder} alt="viewOrder" />
                    <span>BUYURTMALARNI KO’RISH</span>
                </Link>

                <Link to='#' className={hover==='chat'? 'hover': ''} onClick={()=> setHover('chat')}>
                    <img src={chat} alt="chat" />
                    <span>HABARLARNI KO’RISH</span>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar