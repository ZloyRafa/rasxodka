import ProductItem from "./ProductItem";
import MyButton from "./UI/button/MyButton";

const ProductList = (props) => {
    console.log(props)
    const products = props.products;
    return (
        <div className="productList">
            {products.map(product =>
                <ProductItem
                    key={product.id}
                    product={product}
                />
            )}
        </div>
    );
};

export default ProductList;