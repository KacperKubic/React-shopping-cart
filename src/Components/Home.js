import { products } from '../ProductList.js';
import SingleProduct from './SingleProduct.js';

const Home = () => {
    return ( 
        <div className="home">
            {products.map((product, key) => {
                return <SingleProduct key={key} image={product.imageSrc} name={product.name} price={product.price}/>
            })}
        </div>
     );
}
 
export default Home;