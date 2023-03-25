import { useLocation } from "react-router-dom"
import Nav from "../Nav/Nav"
import { Link } from "react-router-dom"
import "./Checkout.css"
import { useState } from "react"

export default function Checkout() {
    //Created Order Passed from Order Page
    let location = useLocation()
    const [order, setOrder] = useState(location.state)

    function handleOrderSubmit(){
        setOrder({total: 0, items: []})
        alert("Your order has been placed and will be ready soon!")
    }

    return (
        <>
            <Nav order={order}/>
            <div className="checkout-container">
            <div className="order-summary">
            <h2 className="summary-header">Order Summary</h2>
            {(!order || order.items.length === 0 )&& 
            <h3>Your order is currently empty, click <Link to="/order" state={order}>here</Link> to place your order.</h3>
            }
            {(order && order.items) && order.items.map((orderItem, index) => {
                return (
                    <div className="order-item">
                        <div className="item-container">
                        <span>
                            {orderItem.size} {orderItem.type} with {orderItem.crust} Crust 
                            {orderItem.extras.length !== 0 && <span>, Add </span>}
                            {orderItem.extras.length !== 0 && orderItem.extras.map(extra => {
                                return <span>{extra} </span>
                            })}
                        </span>
                        <span className="order-item-price"> ${orderItem.price}</span>
                        </div>
                    </div>
                )
            })}
                        {order.items.length !== 0 &&
            <div className="order-summary-footer">
                <span className="total-price">Total: ${order.total}</span>
            </div>
            }
            </div>
        {(order && order.items.length !== 0) && 
            <form className="checkout">
                    <h3 className="section-header">Order Details</h3>
                    <div className="checkout-req">
                    <label for="fname" className="checkout-label">First Name:</label>
                    <input id="fname" type="text" required></input>
                    </div>

                    <div className="checkout-req">
                    <label for="lname" className="checkout-label">Last Name:</label>
                    <input id="lname" type="text" required></input>
                    </div>

                    <div className="checkout-req">
                    <label for="number" className="checkout-label">Phone Number:</label>
                    <input id="number" type="tel" required></input>
                    </div>

                    <div className="checkout-req">
                    <label for="number" className="checkout-label">Email:</label>
                    <input id="number" type="email" required></input>
                    </div>
                

                <div className="confirm-order section-header">
                    <button className="form-button checkout-button" type="submit" onClick={() => {handleOrderSubmit()}}>Confirm Order</button>
                </div>
            </form>
        }
        </div>
        </>
    )
}