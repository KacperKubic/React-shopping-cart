import { CartContext } from '../Context';
import { useContext } from 'react';

const SingleProduct = ({product}) => {
    const {cart, setCart} = useContext(CartContext)
    
    return ( 
        <div className='product'>
            <img className='productImage' src={product.image} alt={product.name}/>
            <div className='productDescription'>
                <span>{product.name}</span>
                <span>{product.price.toFixed(2)} PLN</span>
            </div>
            {cart.includes(product) ? 
            (
                <button className='add' onClick={() => {setCart(cart.filter((item)=>item.id !== product.id))}}>
                remove
                </button>
            ) : (
                <button className='add' onClick={() => {setCart([...cart, product])}}>
                +
                </button>
            )}
        </div>
     );
}
 
export default SingleProduct;