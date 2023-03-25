//Menu Page
import './Menu.css'
import MenuItem from '../MenuItem/MenuItem'
import Nav from '../Nav/Nav'
import {menuData} from './menuData.js'
import { useLocation } from 'react-router-dom'




export default function Menu(){

    let location = useLocation()
    let order = location.state

    //Creating a Menu Item Component for each item on Menu
    let menuComponents = menuData.map(item => {
        return (<MenuItem item={item}/>);
    })

    return(
        <>
        <Nav order={order}/>
        <div className="menu">
            {menuComponents}
        </div>
        </>
    )
}