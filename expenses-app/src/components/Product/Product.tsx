const Product = ({productName } : {productName : string}) => {
    return(
        <div role="contentinfo">
            <p role="testrole">Product name is {productName}</p>
        </div>
    )
 }

export default Product;