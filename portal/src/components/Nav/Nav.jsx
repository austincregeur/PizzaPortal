import './Nav.css'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Link } from 'react-router-dom';

export default function Nav({cart}) {    


    return (
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/order">Order</Link></li>
            {(window.location.pathname === "/checkout" || window.location.pathname === "/order") && <Badge overlap="rectangular" color="secondary" badgeContent={cart}>
            <ShoppingCartIcon />{" "}
            </Badge>}
        </nav>
    );
}