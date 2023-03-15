import cheeseImage from './cheese.jpeg';
import './MenuItem.css'

export default function MenuItem({item, updateCart}){
    console.log(item);
    return (
        <div className="menu-item">
            <p className="item-name">{item.name}</p>
            <p className="item-price">Price: ${item.price}</p>
            <form>
            <div className="size-section">
                <input type="radio" name="size" id="small" value="small" selected/>
                <label className="form-item" for="small">Small</label>
                <input type="radio" name="size" id="medium" value="medium" />
                <label className="form-item" for="medium">Medium</label>
                <input type="radio" name="size" id="large" value="large" />
                <label className="form-item" for="large">Large</label>
            </div>
            <div className="crust-section">

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