import './Nav.css'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Link } from 'react-router-dom';

export default function Nav({order}) {    


    return (
        <nav>
            <li><Link to="/" state={order} style={{ textDecoration: 'none' }}>Home</Link></li>

            <li><Link to="/menu" state={order} style={{ textDecoration: 'none' }}>Menu</Link></li>

            <li><Link to="/order" state={order} style={{ textDecoration: 'none' }}>Order</Link></li>
            
            <li>
            <Link to="/checkout" state={order} style={{ textDecoration: 'none' }}>
                <Badge overlap="rectangular" color="secondary" badgeContent={order && order.items.length}>
                <ShoppingCartIcon />{" "}
                </Badge>
            </Link>
            </li>
        </nav>
    );
}