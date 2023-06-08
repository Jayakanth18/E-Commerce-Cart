import React, { useContext } from "react";
import "./product.css";
import { ShopContext } from "../../context/Shop-context";

const Product = (props) => {
  //context
  const { addToCart, cartItem, removeFromCart } = useContext(ShopContext);

  //to convert usd to inr
  const dollar_equalent_inr = 82.53;
  const { id, description, price, title, rating } = props.data;
  const [image, image1, image2, image3, image4] = props.data.images;
  //to display cart no
  let cartItemAmount = cartItem[id];
  return (
    <div className="container">
      <div className="product">
        <img src={image} alt={title} />
        <div className="details">
          <h3>{title}</h3>
          <br />
          <p>{description}</p>
          <br />
          <h2>{`₹ ${price * dollar_equalent_inr}`}</h2>
          <h4>{`⭐ ${rating}`}</h4>
          <br />
        </div>
        <button className="cartbtn" onClick={() => addToCart(id)}>
          Add To Cart
          {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default Product;
