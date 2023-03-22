import './PizzaForm.css';
import { useState } from 'react';

export default function PizzaForm(){
    const [order, setOrder] = useState([]);

    function handleNewOrder(e){
        e.preventDefault();
        let pizzaType = document.getElementById("pizzaType").value
        let sizeOptions = document.getElementsByName("size")
        let crustOptions = document.getElementsByName("crust")
        let size = findChoice(sizeOptions);
        let crust = findChoice(crustOptions)
        let pizza = {
            type: pizzaType,
            size: size,
            crust: crust
        }
        setOrder([...order, pizza])
        console.log(order)
    }

    function findChoice(sizes){
        let value
        for(let i = 0; i < sizes.length; i++){
            if(sizes[i].checked){
                value = sizes[i].id;
                break;
            }
        }
        return value;
    }
    
    return (
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
                <label for="small">Small</label>
                <input type="radio" id="small" name="size"></input>
                <label for="medium">Medium</label>
                <input type="radio" id="medium" name="size"></input>
                <label for="large">Large</label>
                <input type="radio" id="large" name="size"></input>

                <br />
                <span>Crust:</span>
                <label for="original">Original</label>
                <input type="radio" id="original" name="crust"></input>
                <label for="thin">Thin</label>
                <input type="radio" id="thin" name="crust"></input>
                <label for="deep-dish">Deep Dish</label>
                <input type="radio" id="deep-dish" name="crust"></input>

                <br />
                <span>Add Ingredients</span><button>+</button>

                <br />
                <span>Special Notes:</span>
                <button onClick={handleNewOrder}>Add to Order</button>
            </form>
        </div>
    )
}