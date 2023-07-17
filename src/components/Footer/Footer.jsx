import React from 'react'
import './footer.css'
import logo from '../../img/Logo.svg'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className='bg'>
            <div className="brend d-flex justify-content-center alig-items-center">
                <img src={logo} alt="logo" />
            </div>
            <hr className='my-5' />
            <hr />
            <div className="internet-controller my-5 d-flex justify-content-between">
                <p>© 2023 <span>STAR-BURGER</span>. Barcha ma’lumotlar <span>himoya</span> qilinadi!</p>
                <div className="icon">
                    <Link to='/https://youtube.com'>
                        <i className='fab fa-youtube'></i>
                    </Link>
                    <Link to='/https://instagram.com'>
                        <i className='fab fa-instagram'></i>
                    </Link>
                    <Link to='/https://telegram.org'>
                        <i className='fab fa-telegram'></i>
                    </Link>
                    <Link o='/https://star-burger.uz'>
                        <i className='fa fa-globe'></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer