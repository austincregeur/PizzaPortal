import cheeseImage from './cheese.jpeg';
import pepperoniImage from './pepperoni.webp'
import hawaiianImage from './hawaiian.jpeg'
import bbqImage from './bbq.jpeg'
import meatImage from './meat.jpeg'
import supremeImage from './supreme.webp'
import './MenuItem.css'

export default function MenuItem({item}){
    let images = [cheeseImage, pepperoniImage, hawaiianImage, bbqImage, meatImage, supremeImage]
    return (
        <div className="menu-item" id={item.id}>
            <p className="item-name">{item.name}</p>
            <p className="item-price">Price: ${item.price}</p>
            <p className="item-description">{item.description}</p>
            <img className='item-image' src={images[item.id]} alt="pizza"></img>
        </div>
    );
}