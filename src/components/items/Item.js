// import React from "react";
import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

import "./Item.css";
const Item = ({ id, name, image, new_price, old_price }) => {
  const { addToCart } = useContext(ShopContext);
  
  const handleAddToCart = () => {
    addToCart({ id, name, image, new_price, old_price });
  };
  return (
    <div className="item">
      <img src={image} alt="" />
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">Rs {new_price}</div>
        <div className="item-price-old">Rs {old_price}</div>
      </div>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default Item;
