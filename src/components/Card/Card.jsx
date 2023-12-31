import React, { useEffect, useState } from 'react';
import './card.css';
import add from '../../img/Add.svg';

const Card = ({ food }) => {
    const [FoodCard, setFoodCard] = useState([]);

    useEffect(() => {
        fetch('https://burgeruz.onrender.com/foods')
            .then(res => res.json())
            .then(data => {
                const foodDataWithCount = data.map(item => ({ ...item, count: 0 }));
                setFoodCard(foodDataWithCount);
            })
    }, []);

    const handleAddControlClick = (index, _id) => {
        setFoodCard(prevState => {
            const updatedFoodCard = [...prevState];
            updatedFoodCard[index].count += 1;
            return updatedFoodCard;
        });

        const selectedProduct = FoodCard.find(el => el._id === _id);
        if (selectedProduct) {
            const shop = JSON.parse(localStorage.getItem('shop') || '[]');
            shop.push(selectedProduct);
            localStorage.setItem('shop', JSON.stringify(shop));
        }
    };

    return (
        <>
            <div className="MenuApp">
                {
                    FoodCard.map((el, index) => (
                        <div className="card d-flex" key={el.foodName}>
                            <div className="card--img">
                                <img src={'https://burgeruz.onrender.com/images/' + el.img} alt="palov" />
                            </div>
                            <hr />
                            <div className="content">
                                <h2 id="foodName">{el.foodName}</h2>

                                <div className="info">
                                    <h4 id="foodPrice">{el.price}</h4>
                                    <p id="food-information">
                                        Malumot: <span>{el.foodInfo}</span>
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
                                    <button className='addbuton' onClick={() => handleAddControlClick(index, el._id)}>
                                        <img src={add} alt="add" />
                                    </button>

                                    {/* Count +1 */}
                                    <button className="addControl">
                                        {el.count} ta
                                    </button>
                                </div>
                            </footer>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Card;