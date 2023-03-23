import './PizzaForm.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import Nav from '../Nav/Nav';

export default function PizzaForm({currOrder}){
    let initialOrder
    if(currOrder){
        initialOrder = currOrder
    } else {
        initialOrder = []
    }
    const [order, setOrder] = useState(initialOrder);
    function handleNewOrder(e){
        e.preventDefault();
        //Getting From Data
        let pizzaType = document.getElementById("pizzaType").value
        let sizeOptions = document.getElementsByName("size")
        let crustOptions = document.getElementsByName("crust")
        let extraOptions = document.getElementsByName("extra-ingredients")
        let size = findChoice(sizeOptions);
        let crust = findChoice(crustOptions)
        let extras = findChoices(extraOptions)
        //Creating Pizza Object from Form Data
        let pizza = {
            type: pizzaType,
            size: size,
            crust: crust,
            extras: extras
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
        console.log(value)
        return value
    }
    
    return (
        <>
        <Nav order={order}/>
        <div className="pizza-form-container">
            <h2>Customize Your Pizza</h2>
            <form className="pizza-form">
                <span>Select Pizza:</span>
                <select id="pizzaType">
                    <option value="Pepperoni">Pepperoni</option>
                    <option value="Cheese">Cheese</option>
                    <option value="Hawaian">Hawaian</option>
                </select>

                <br />
                <span>Size:</span>
                <label htmlFor="small">Small</label>
                <input type="radio" id="small" name="size"></input>
                <label htmlFor="medium">Medium</label>
                <input type="radio" id="medium" name="size" checked></input>
                <label htmlFor="large">Large</label>
                <input type="radio" id="large" name="size"></input>

                <br />
                <span>Crust:</span>
                <label htmlFor="original">Original</label>
                <input type="radio" id="original" name="crust" checked></input>
                <label htmlFor="thin">Thin</label>
                <input type="radio" id="thin" name="crust"></input>
                <label htmlFor="deep-dish">Deep Dish</label>
                <input type="radio" id="deep-dish" name="crust"></input>

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

                <Link to="/checkout" state={order}>Checkout</Link>
            </form>
            {order && order.map(order => {
                return (
                    <p>Pizza: {order.type} Size: {order.size} Crust: {order.crust}, Add-ons: {order.extras}</p>
                )
            })}
        </div>
        </>
    )
}