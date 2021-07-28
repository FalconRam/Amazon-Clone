import React from "react";
import { useStateValue } from "../Reducer/StateProvider";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();
  console.log(cart);
  const addToCart = () => {
    // dispatch the item to the datalayer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
