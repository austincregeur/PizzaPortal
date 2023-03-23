import Nav from "../Nav/Nav"
import PizzaForm from "../PizzaForm/PizzaForm"
import { useLocation } from "react-router-dom"

export default function Order() {
    
    let location = useLocation()
    let order = location.state

    return (
        <div>
            <Nav order={order}/>
            <PizzaForm currOrder={order}/>
        </div>
    )
}