import react from "react";
import MyButton from "./UI/button/MyButton";

const ProductItem = (props) => {
    return (
        <div className="productItem">
            
            <div className="product_content">
            <strong> {props.product.title}</strong>
                <div> {props.product.price}</div>
            </div>
            <div className="product_buttom">
                <MyButton>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default ProductItem;