import React from "react";
import './viewOrder.css'
import Palov from "../../../img/palov.png";
function OrdersProduct() {
    return (
        <div className="card-app">
            <div className="product--name--image">
                <img src={Palov} alt="" />
                <section id="product--btns">
                    <section>
                        <p className="product--name">Tuxumli palov</p>
                    </section>
                    <section className="fbc">
                        <button>1 piyola tuxumli palov</button>
                        <button>3 ta salad</button>
                        <button>3 ta pepsi</button>
                        <button>5 ta coffee</button>
                        <button>2 piyola mol go'shtli sho'rva</button>
                    </section>
                </section>
            </div>
            <hr />
            <div className="product--location">
                <p>TAOM NARXI: 500.000 so'm</p>
                <p>MANZIL: Guliston mahalla, Toshkent ko'chasi 5-uy</p>
                <p>FIO: Akhmedov Quvonchbek</p>
                <p>TEL: +998996601906</p>
            </div>
            <hr />
            <div className="product--buttons">
                <button>Qabul qilish</button>
                <button>Bekor qilish</button>
            </div>
        </div>
    )
}


export default OrdersProduct;