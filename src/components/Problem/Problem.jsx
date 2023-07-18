import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Problem.css'
function Problem() {
    return (
        <>
            <div className="container">
                <div className="navbarMenu">
                    <Navbar />
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form">
                            <h1 className='my-5'>Sizda qanday <span>maummo</span> mavjud?</h1>
                            <form>
                                <input type="text" placeholder='Ismingizni kiriting' />
                                <input type="text" placeholder='Telefon raqami' />
                                <textarea placeholder='Muammoni kiriting'></textarea>
                                <button>YUBORISH</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Problem;