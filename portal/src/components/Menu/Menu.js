import './Menu.css'
import MenuItem from '../MenuItem/MenuItem'
import Nav from '../Nav/Nav'
import { useState } from 'react'
import {menuData} from './menuData.js'




export default function Menu(){
    let [cart, setCart] = useState(0)
    function updateCart(e){
        e.preventDefault();
        console.log(e)
        setCart(cart + 1);
    }

    let menuComponents = menuData.map(item => {
        let itemProps = {
            "id": item.id,
            "name": item.name,
            "price": item.price,
            "toppings": item.toppings
        };
        return (<MenuItem item={itemProps} updateCart={updateCart}/>);
    })
    console.log(menuData)

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