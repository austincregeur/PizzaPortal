import cheeseImage from './cheese.jpeg';
import './MenuItem.css'

export default function MenuItem(item){
    console.log(item);
    return (
        <div className="menu-item">
            <p className="item-name">{item.name}</p>
            <p className="item-price">Price: ${item.price}</p>
            <ul className="item-toppings"></ul>
            <p className="item-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi temporibus veritatis libero illo tempore, reiciendis magnam quia neque iste officia nulla voluptate aliquam distinctio, eaque dolorum maxime eum recusandae quibusdam.</p>
            <img className='item-image' src={cheeseImage} alt="pizza"></img>
        </div>
    );
}