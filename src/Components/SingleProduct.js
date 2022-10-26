import { CartContext } from '../Context';
import { useContext } from 'react';
import { BsFillCartPlusFill, BsFillCartDashFill } from 'react-icons/bs'

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
                    <BsFillCartDashFill/>
                </button>
            ) : (
                <button className='add' onClick={() => {setCart([...cart, product])}}>
                    <BsFillCartPlusFill/>
                </button>
            )}
        </div>
     );
}
 
export default SingleProduct;