import cheeseImage from './cheese.jpeg';
import './MenuItem.css'

export default function MenuItem({item, updateCart}){
    let smallID = "small-" + item.id
    let mediumID = "medium-" + item.id
    let largeID = "large-" + item.id
    let thinID = "thin-" + item.id
    let originalID = "original-" + item.id
    let deepID = "deep-" + item.id
    return (
        <div className="menu-item">
            <p className="item-name">{item.name}</p>
            <p className="item-price">Price: ${item.price}</p>
            <form className="order-section">

            <div className="form-section">
                <input type="radio" name="crust" id={originalID} value="original" selected/>
                <label className="form-item" for={originalID}>Original</label>
                <input type="radio" name="crust" id={thinID} value="thin" />
                <label className="form-item" for={thinID}>Thin</label>
                <input type="radio" name="crust" id={deepID} value="deep" />
                <label className="form-item" for={deepID}>Deep Dish</label>
            </div> 

            <div className="form-section">
                <input type="radio" name="size" id={smallID} value="small" selected/>
                <label className="form-item" for={smallID}>Small</label>
                <input type="radio" name="size" id={mediumID} value="medium" />
                <label className="form-item" for={mediumID}>Medium</label>
                <input type="radio" name="size" id={largeID} value="large" />
                <label className="form-item" for={largeID}>Large</label>
            </div>

            <div className="submit-section">
                <select className="pizza-amount form-item" name="amount" id="amount">
                    <option value="one" selected>1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="five">5</option>
                </select>
                <button className="form-item add-button" onClick={updateCart}>Add to Order</button>
            </div>
            </form> 

            <p className="item-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus veritatis libero illo tempore, reiciendis magnam quia neque iste officia nulla voluptate aliquam distinctio, eaque dolorum maxime eum recusandae quibusdam.</p>
            <img className='item-image' src={cheeseImage} alt="pizza"></img>
        </div>
    );
}