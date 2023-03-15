import './Menu.css'
import MenuItem from '../MenuItem/MenuItem'
import Nav from '../Nav/Nav'

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

let menuComponents = menu.map(item => {
    let itemProps = {
        "name": item.name,
        "price": item.price,
        "toppings": item.toppings
    };
    return (<MenuItem {...itemProps} />);
})

export default function Menu(){
    return(
        <>
        <Nav />
        <div className="menu">
            {menuComponents}
            {menuComponents}
        </div>
        </>
    )
}