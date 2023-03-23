import './App.css';
import Nav from '../Nav/Nav';
import { useLocation } from 'react-router-dom';

export default function Home() {
  
  let location = useLocation()
  let order = location.state
  return (
    <div className="App">
      <Nav order={order}/>
      <h1>Welcome to Pizza Palace</h1>
    </div>
  );
}
