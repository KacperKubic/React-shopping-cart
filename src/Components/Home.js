import { products } from './ProductList.js';
import SingleProduct from './SingleProduct.js';


const Home = ({cart, setCart}) => {
    return ( 
        <div className="home">
            {products.map((product, key) => {
                return <SingleProduct key={key} product={product} cart={cart} setCart={setCart}/>
            })}
        </div>
     );
}
 
export default Home