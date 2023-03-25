import './PizzaForm.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import Nav from '../Nav/Nav';
import { useLocation } from 'react-router-dom';
import {menuData} from '../Menu/menuData.js'

export default function PizzaForm(){
    let location = useLocation()
    let currOrder = location.state
    let initialOrder
    if(currOrder){
        initialOrder = currOrder
    } else {
        initialOrder = {
            total: 0,
            items: []
        }
    }
    const defaultOrder = {
        total: 0,
        items: []
    }
    const [order, setOrder] = useState(initialOrder);



    let crustPrice = {
        Thin: 0,
        Original: 0,
        "Deep-Dish": 2
    }

    let sizeMultiplier = {
        Small: 0.5,
        Medium: 1,
        Large: 1.5
    }

    let extraPrice = {
        "extra-cheese": 1.5,
        "sausage": 1,
        "veg": 0.5,
        "chicken": 2,
        "bacon": 1.5
    }

    function handleNewOrder(e){
        e.preventDefault();
        
        //Getting From Data
        let pizzaTypeID = document.getElementById("pizzaType").value
        let menuPizza = menuData[pizzaTypeID]
        let pizzaType = menuPizza.name
        let sizeOptions = document.getElementsByName("size")
        let crustOptions = document.getElementsByName("crust")
        let extraOptions = document.getElementsByName("extra-ingredients")
        let size = findChoice(sizeOptions, "Medium");
        let price = Math.floor(menuPizza.price * sizeMultiplier[size] * 100) / 100
        let crust = findChoice(crustOptions, "Original")
        price += crustPrice[crust]
        let extras = findChoices(extraOptions)
        extras.forEach(extra => {
            price += extraPrice[extra]
        })
        //Creating Pizza Object from Form Data
        let pizza = {
            type: pizzaType,
            size: size,
            crust: crust,
            extras: extras,
            price: price
        }
        let newTotal = order.total
        newTotal = Math.floor((newTotal + pizza.price) * 100)/100
        setOrder(prevOrder => ({
            total: newTotal,
            items: [
                ...prevOrder.items,
                pizza
            ]
        }))
    }



    //Function to find which option was selected from radio buttons
    function findChoice(sizes, defaultValue){
        let value
        for(let i = 0; i < sizes.length; i++){
            if(sizes[i].checked){
                value = sizes[i].id;
                sizes[i].checked = false //Resetting the form
            }
        }
        if(!value) value = defaultValue
        return value;
    }

    function findChoices(options){
        let value = []
        for(let i = 0; i < options.length; i++){
            if(options[i].checked){
                value.push(options[i].id)
                options[i].checked = false
            }
        }
        return value
    }

    function resetOrder() {
        setOrder(defaultOrder);
    }

    function removeOrderItem(index){
        let newItems = order.items.slice();//Need the slice, something with references and react doesn't think state has changed so it doesn't rerender w/out it
        let newTotal = Math.ceil((order.total - newItems[index].price)*100)/100
        newItems.splice(index,1)
        setOrder({
            total: newTotal,
            items: newItems
        })
    }

    
    return (
        <>
        <Nav order={order}/>
            <form className="pizza-form">
                <h1>Customize Your Pizza</h1>

                <div className="field">
                <span className="field-header">Select Pizza:</span>
                <select className="pizza-select" id="pizzaType">
                    {menuData && menuData.map(item => {
                        return <option value={item.id}>{item.name}</option>
                    })}
                </select>
                </div>


                <div className="field">
                <span className="field-header">Size:</span>
                
                <input type="radio" id="Small" name="size" required></input>
                <label className="pizza-form-item" htmlFor="Small">Small</label>
                
                <input type="radio" id="Medium" name="size"></input>
                <label className="pizza-form-item" htmlFor="Medium">Medium</label>
                
                <input type="radio" id="Large" name="size"></input>
                <label className="pizza-form-item" htmlFor="Large">Large</label>
                </div>


                <div className="field">
                <span className="field-header">Crust:</span>
                
                <input type="radio" id="Original" name="crust" required></input>
                <label className="pizza-form-item" htmlFor="Original">Original</label>
                
                <input type="radio" id="Thin" name="crust"></input>
                <label className="pizza-form-item" htmlFor="Thin">Thin</label>
                
                <input type="radio" id="Deep-Dish" name="crust"></input>
                <label className="pizza-form-item" htmlFor="Deep-Dish">Deep Dish</label>
                </div>


                <div className="add-ingred field">
                <span className="field-header">Add Ingredients:</span>
                    <input type="checkbox" id="extra-cheese" name="extra-ingredients"></input>
                    <label className="pizza-form-item" htmlFor="extra-cheese">Extra Cheese $1.50</label>

                    <input type="checkbox" id="sausage" name="extra-ingredients"></input>
                    <label className="pizza-form-item" htmlFor="sausage">Sausage $1</label>

                    <input type="checkbox" id="veg" name="extra-ingredients"></input>
                    <label className="pizza-form-item" htmlFor="veg">Mushrooms, Onions, Peppers $0.5</label>

                    <input type="checkbox" id="chicken" name="extra-ingredients"></input>
                    <label className="pizza-form-item" htmlFor="chicken">Chicken $2</label>

                    <input type="checkbox" id="bacon" name="extra-ingredients"></input>
                    <label className="pizza-form-item" htmlFor="bacon">Bacon $1.50</label>
                </div>


                <div>
                <button id="add-button" className="form-button" onClick={handleNewOrder}>Add to Order</button>
                </div>

            </form>
            <div id="order-summary" className="order-summary">
            {order.items.length !== 0 && <h2 className="summary-header">Order Summary</h2>}
            {order.items && order.items.map((orderItem, index) => {
                return (
                    <div className="order-item">
                        <div className="item-container">
                        <span>
                            {orderItem.size} {orderItem.type} with {orderItem.crust} Crust 
                            {orderItem.extras.length !== 0 && <span>, Add </span>}
                            {orderItem.extras.length !== 0 && orderItem.extras.map(extra => {
                                return <span>{extra} </span>
                            })}
                        </span>
                        <span className="order-item-price"> ${orderItem.price}</span>
                        </div>
                    <button className="form-button" id="remove-order-item-button" onClick={() => removeOrderItem(index)}>&#10060;</button>
                    </div>
                )
            })}
            {order.items.length !== 0 &&
            <div className="order-summary-footer">
                <span className="total-price">Total: ${order.total}</span>
                <div className="footer-actions">
                <button onClick={resetOrder} className="form-button" id="reset-button">Cancel</button>
                <Link to="/checkout" state={order}><button id="checkout-button" className="form-button">Proceed to Checkout</button></Link>
                </div>
            </div>
            }
            </div>
        </>
    )
}