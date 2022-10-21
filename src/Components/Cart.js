import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context";
import SingleProduct from "./SingleProduct";

const Cart = () => {
    const {cart} = useContext(CartContext);
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        let totalPirce = 0;
        cart.forEach(product => {totalPirce += product.price})
        setTotal(totalPirce);
    }, [cart])

    return ( 
        <div className='cart'>
            <div className='cartProducts'>
                {cart.map((product, key) => {
                    return <SingleProduct key={key} product={product}/>
                })}
            </div>
            <div className='cartTotal'>
                <div>
                    <span>Total: {`${total.toFixed(2)} PLN`}</span>
                </div>
            </div>
        </div>
     );
}
 
export default Cart;