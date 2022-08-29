import React from "react"
import "./Product.css"
import { useStateValue } from "./StateProvider";





function Product({id, title, price, image, rating}){

    const [state,dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                rating: rating,
            },
        });
    };

    return(
        // <div>
            <div className="product">
                <div className="product__info">
                    <p>{title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(rating)
                        .fill()
                        .map((_,i) => (
                            <p>⭐</p>
                        ))
                        }
                    </div>
                </div>
                <img src={image} alt="product-image" />

                <button onClick={addToBasket}>Add to Basket</button>
            </div>
        // </div>
        
    )
}
export default Product