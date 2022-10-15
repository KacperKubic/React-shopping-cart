import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';


const Header = () => {
    return ( 
       <div className='header'>
        <h3>Shopping cart project</h3>
        <ul className='navbar'>
          <li className='link'>
            <Link to="/">Homepage</Link>
          </li>
          <li className='link'>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
       </div>
     );
}
 
export default Header;