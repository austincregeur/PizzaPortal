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
    let toppings = "";
    toppings = item.toppings.map(topping => {
        return toppings + topping.type + ' ';
    })
    return (
    <div>
        <h3>{item.name}</h3>
        <h4>Price: ${item.price}</h4>
        <h4>Toppings: {toppings}</h4>
    </div>
    );
})

export default function Menu(){
    return(
        <div className="menu">
            {menuComponents}
        </div>
    )
}