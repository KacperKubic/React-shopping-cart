import { faker } from '@faker-js/faker';
import { useState } from 'react'
import SingleProduct from './SingleProduct.js';

faker.seed(100)

const Home = () => {
    const products=[...Array(15)].map(()=>({
        id: faker.datatype.uuid(), name: faker.commerce.productName(), price: faker.commerce.price(), image: faker.image.image(),
    }));

    const [cart, setCart] = useState([]);

    return ( 
        <div className="home">
            {products.map((product, key) => {
                return <SingleProduct key={key} img={product.image} name={product.name} price={product.price}/>
            })}
        </div>
     );
}
 
export default Home