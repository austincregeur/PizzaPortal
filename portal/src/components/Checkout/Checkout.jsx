import { useLocation } from "react-router-dom"
import Nav from "../Nav/Nav"

export default function Checkout() {
    //Created Order Passed from Order Page
    let location = useLocation()
    let order = location.state

    return (
        <div>
            <Nav order={order}/>
            {order.map(item => {
                return (<div>
                    <span>Pizza: {item.type}, Size: {item.size}, Crust: {item.crust}</span>
                </div>)
            })}
        </div>
    )
}