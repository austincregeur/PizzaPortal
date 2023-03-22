import { useLocation } from "react-router-dom"

export default function Checkout() {
    
    let location = useLocation()
    let order = location.state

    return (
        <div>
            {order.map(item => {
                return (<div>
                    <span>Pizza: {item.type}, Size: {item.size}, Crust: {item.crust}</span>
                </div>)
            })}
        </div>
    )
}