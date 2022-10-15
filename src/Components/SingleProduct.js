const SingleProduct = ({image, name, price}) => {
    return ( 
        <div className='product'>
            <div style={{backgroundImage: `url(${image})`}}></div>
            <h3>{name}</h3>
            <p>{price}PLN</p>
        </div>
     );
}
 
export default SingleProduct;