import React from 'react'
import hero from '../../img/Hero.png'
import './HeaderApp.css'
function HeaderApp() {
    return (
        <>
            <div className="container my-5">
                <div className="row d-flex align-items-center justify-content-between" style={{ width: '100%' }}>
                    <div className="col">
                        <div className="header">
                            <div className='navContent'>
                                <hr />
                                <span>1000 TA FOYDALANUVCHI</span>
                            </div>
                            <h1>Bugun barcha <span>ovqatlar</span> siz uchun</h1>
                            <p>START-BURGER.UZ restoranida barcha ovqatlar uchun ajoyib qo’shimchalar mavjud. Eng sifatli ovqatlar va tez yetkazib berish xizmati faqat START-BURGER.UZda!</p>
                            <div className="buttons">
                                <button>Boshlash</button>
                                <button>Pro versiya</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="hero">
                            <img src={hero} alt="hero" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderApp