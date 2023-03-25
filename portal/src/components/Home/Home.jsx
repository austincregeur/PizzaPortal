import './App.css';
import Nav from '../Nav/Nav';
import { useLocation } from 'react-router-dom';

export default function Home() {
  
  let location = useLocation()
  let order = location.state
  return (
    <>
    <Nav order={order}/>
    <div className="App">
      <h1>Pizza Palace</h1>
      <p className="homepage">Step into a world of flavor and indulgence at our pizza restaurant. Our passion for pizza began with a simple dream: to create a place where pizza lovers could come together and enjoy delicious, high-quality pizza made with the freshest ingredients and innovative flavor combinations. Today, we're proud to say that we've accomplished that dream, and we can't wait to share our pizza creations with you.</p>

      <p className="homepage">Our chefs are artisans, each with a unique approach to creating perfect pizza. From our homemade dough, to our tangy tomato sauce, to our premium toppings, we take great care in crafting every aspect of our pizzas. But we don't just stop at pizza. We also offer a variety of appetizers, salads, and desserts to complement your meal.</p>

      <p className="homepage">When you visit us, you'll experience a warm and inviting atmosphere, where you can relax and enjoy your meal. Whether you're grabbing a quick slice on your lunch break, or settling in for a cozy dinner with family and friends, we've got you covered. We take pride in offering exceptional service, and we'll always go the extra mile to ensure that your experience with us is nothing short of fantastic.</p>

      <p className="homepage">So come on in, and explore our menu of mouth-watering pizzas and delicious sides. We're confident that you'll find something that you'll absolutely love. Thank you for choosing us as your pizza destination, and we can't wait to share our passion for pizza with you.</p>
    </div>
    </>
  );
}
