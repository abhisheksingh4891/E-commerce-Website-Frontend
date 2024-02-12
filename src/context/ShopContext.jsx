import React, { createContext, useState } from "react";
import all_product from "../components/assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(1);
  
  // stored add to cart function in store using provider(contextAPI) and passed to item.js
  const addToCart = (data) => {
    // Check if the item already exists in the cart
    const isDuplicate = cartItems.some((item) => item.id === data.id);
    
    // If not, add the item to the cart
    if (!isDuplicate) {
      setCartItems((previtems) => [...previtems, data]);
      // console.log(data);
    }else{
      console.log("Item already added to cart");
      setCount(count+1);

    }
  };

  // stored delete from cart function in store using provider(contextAPI) and passed to Cart.js
  const deleteItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const contextValue = { all_product, cartItems, addToCart, deleteItem, count, setCount};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
