import { useLocation } from "react-router-dom"
import Nav from "../Nav/Nav"

export default function Checkout() {
    //Created Order Passed from Order Page
    let location = useLocation()
    let order = location.state
    console.log(order)

    return (
        <div>
            <Nav order={order}/>
            <h2>Order Summary</h2>
            {order && order.map(item => {
                return (<div>
                    <span>Pizza: {item.type}, Size: {item.size}, Crust: {item.crust}</span>
                </div>)
            })}
            {(!order || order.length === 0) && <h3>No items</h3>}
        </div>
    )
}