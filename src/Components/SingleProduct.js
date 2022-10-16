const SingleProduct = (product) => {
    return ( 
        <div className='product'>
            <img src={product.img} alt={product.name}/>
            <div className='productDescription'>
                <span>{product.name}</span>
                <span>{product.price} PLN</span>
            </div>
            <button className='add'>+</button>
        </div>
     );
}
 
export default SingleProduct;