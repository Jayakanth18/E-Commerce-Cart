import React, { createContext, useState, useEffect } from "react";
import axiox from "axios";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= 30; i++) {
    cart[i] = 0;
  }
  return cart;
};

export function ShopContextProvider(props) {
  const [cartItem, setCartItem] = useState(getDefaultCart);

  const addToCart = (itemId) => {
    setCartItem((preVal) => ({ ...preVal, [itemId]: preVal[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((preVal) => ({ ...preVal, [itemId]: preVal[itemId] - 1 }));
  };
  //
  const contextValue = { cartItem, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
