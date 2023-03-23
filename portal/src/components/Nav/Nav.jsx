import './Nav.css'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Link } from 'react-router-dom';

export default function Nav({order}) {    


    return (
        <nav>
            <li><Link to="/" state={order}>Home</Link></li>

            <li><Link to="/menu" state={order}>Menu</Link></li>

            <li><Link to="/order" state={order}>Order</Link></li>
            
            <li>
            <Link to="/checkout" state={order}>
                <Badge overlap="rectangular" color="secondary" badgeContent={order && order.length}>
                <ShoppingCartIcon />{" "}
                </Badge>
            </Link>
            </li>
        </nav>
    );
}