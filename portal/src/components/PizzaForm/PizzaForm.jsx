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
        initialOrder = []
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
        let size = findChoice(sizeOptions);
        let price = Math.floor(menuPizza.price * sizeMultiplier[size] * 100) / 100
        let crust = findChoice(crustOptions)
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
        //Adding Pizza Object to order state
        setOrder([...order, pizza])
    }



    //Function to find which option was selected from radio buttons
    function findChoice(sizes){
        let value
        for(let i = 0; i < sizes.length; i++){
            if(sizes[i].checked){
                value = sizes[i].id;
                sizes[i].checked = false //Resetting the form
            }
        }
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
        setOrder([]);
    }

    function removeOrderItem(index){
        let state = order.slice();//Need the slice, something with references and react doesn't think state has changed so it doesn't rerender w/out it
        state.splice(index,1)
        setOrder(state)
    }

    
    return (
        <>
        <Nav order={order}/>
        <div className="pizza-form-container">
            <h2>Customize Your Pizza</h2>
            <form className="pizza-form">
                <span>Select Pizza:</span>
                <select id="pizzaType">
                    {menuData && menuData.map(item => {
                        return <option value={item.id}>{item.name}</option>
                    })}
                </select>

                <br />
                <span>Size:</span>
                <label htmlFor="Small">Small</label>
                <input type="radio" id="Small" name="size"></input>
                <label htmlFor="Medium">Medium</label>
                <input type="radio" id="Medium" name="size" checked></input>
                <label htmlFor="Large">Large</label>
                <input type="radio" id="Large" name="size"></input>

                <br />
                <span>Crust:</span>
                <label htmlFor="Original">Original</label>
                <input type="radio" id="Original" name="crust" checked></input>
                <label htmlFor="Thin">Thin</label>
                <input type="radio" id="Thin" name="crust"></input>
                <label htmlFor="deep-dish">Deep Dish</label>
                <input type="radio" id="Deep-Dish" name="crust"></input>

                <br />
                <span>Add Ingredients</span>
                <div className="add-ingred">
                    <input type="checkbox" id="extra-cheese" name="extra-ingredients"></input>
                    <label htmlFor="extra-cheese">Extra Cheese $1.50</label>
                    <input type="checkbox" id="sausage" name="extra-ingredients"></input>
                    <label htmlFor="sausage">Sausage $1</label>
                    <input type="checkbox" id="veg" name="extra-ingredients"></input>
                    <label htmlFor="veg">Mushrooms, Onions, Peppers $0.5</label>
                    <input type="checkbox" id="chicken" name="extra-ingredients"></input>
                    <label htmlFor="chicken">Chicken $2</label>
                    <input type="checkbox" id="bacon" name="extra-ingredients"></input>
                    <label htmlFor="bacon">Bacon $1.50</label>
                </div>

                <br />
                <span>Special Notes:</span>
                <button onClick={handleNewOrder}>Add to Order</button>

                <Link to="/checkout" state={order}><button>Checkout</button></Link>
                <button onClick={resetOrder}>Reset Order</button>
            </form>
            {order && order.map((orderItem, index) => {
                return (
                    <>
                    <p id={index+1}>{index+1} Pizza: {orderItem.type} Size: {orderItem.size} Crust: {orderItem.crust}, Add-ons: {orderItem.extras.map(extra => {return <span>{extra} </span>})} Price: {orderItem.price}</p>
                    <button onClick={() => removeOrderItem(index)}>Remove</button>
                    </>
                )
            })}
        </div>
        </>
    )
}