import React, { useEffect, useState } from 'react';
import './card.css';
import add from '../../img/Add.svg';

const Card = ({ food }) => {
    const [FoodCard, setFoodCard] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => {
                // Veri gelmeden önceyken her kartın sayacını 0 olarak ayarlayalım.
                const foodDataWithCount = data.map(item => ({ ...item, count: 0 }));
                setFoodCard(foodDataWithCount);
            })
    }, []);

    const handleAddControlClick = (index, id) => {
        setFoodCard(prevState => {
            const updatedFoodCard = [...prevState];
            updatedFoodCard[index].count += 1;
            return updatedFoodCard;
        });

        // Tanınan ürünün ID'sini "shop" dizisine ekleyelim
        const selectedProduct = FoodCard.find(el => el.id === id);
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
                                <img src={'http://localhost:5000/images/' + el.img} alt="palov" />
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
                                    <button onClick={() => handleAddControlClick(index, el.id)}>
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
