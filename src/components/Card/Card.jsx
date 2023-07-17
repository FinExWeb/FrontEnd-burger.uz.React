import React from 'react';
import './card.css'
import palov from '../../img/palov.png'
import add from '../../img/Add.svg'
const Card = ({ food }) => {
    return (
        <>
            <div className="card d-flex">
                <div className="card--img">
                    <img src={palov} alt='palov' />
                </div>
                <hr />
                <div className="content">
                    <h2 id="foodName">Palov</h2>

                    <div className="info">
                        <h4 id="foodPrice">15.000 so'm</h4>
                        <p id="food-information">
                            Malumot: <span>Tuxum qo'shilgan, mol g'oshtli</span>
                        </p>
                    </div>
                </div>

                <footer className="d-flex align-items-center justify-content-between">
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <span>3.5</span>
                    </div>

                    <div className="addedButton d-flex align-items-center justify-content-center">
                        {/* Add button */}
                        <button>
                            <img src={add} alt="add" />
                        </button>

                        {/* Count +1 */}
                        <button className="addControl">
                            {/* Render the count value here */}
                            5 ta
                        </button>
                    </div>
                </footer>
            </div>
        </>

    );
};

export default Card;
