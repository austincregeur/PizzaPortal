import './Menu.css'
import MenuItem from '../MenuItem/MenuItem'
import Nav from '../Nav/Nav'
import { useState } from 'react'

let menu = [
    {
        "name": "Cheese Pizza",
        "price": 9.99,
        "toppings": [
            {
                "type": "Cheese",
                "covers": "all"
            }
        ]
    },
    {
        "name": "Pepperoni Pizza",
        "price": 10.99,
        "toppings": [
            {
                "type": "Cheese",
                "covers": "all"
            },
            {
                "type": "Pepperoni",
                "covers": "all"
            }
        ]
    },
]



export default function Menu(){

    let [cart, setCart] = useState(0)

    function updateCart(e){
        e.preventDefault();
        setCart(cart + 1);
    }

    let menuComponents = menu.map(item => {
        let itemProps = {
            "name": item.name,
            "price": item.price,
            "toppings": item.toppings
        };
        return (<MenuItem item={itemProps} updateCart={updateCart}/>);
    })

    return(
        <>
        <Nav cart={cart}/>
        <div className="menu">
            {menuComponents}
            {menuComponents}
        </div>
        </>
    )
}