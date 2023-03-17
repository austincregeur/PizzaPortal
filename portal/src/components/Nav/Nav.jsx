import './Nav.css'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";

export default function Nav({cart}) {    

    return (
        <nav>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
            <Badge color="secondary" badgeContent={cart}>
            <ShoppingCartIcon />{" "}
            </Badge>
        </nav>
    );
}