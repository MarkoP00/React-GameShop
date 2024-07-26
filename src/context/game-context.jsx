import React, { createContext, useState, useEffect } from "react";
import { GAMES } from "../GAMES";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const GameContext = createContext(null);

export const GameContextProvider = ({ children }) => {
  const getDefaultCartValue = () => {
    let cart = {};
    GAMES.forEach((game) => {
      cart[game.id] = 0;
    });
    return cart;
  };

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : getDefaultCartValue();
  });

  const [gameItems, setGameItems] = useState(GAMES);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleTotalPrice = () => {
    let totalPrice = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        let findItem = GAMES.find((game) => game.id === parseInt(itemId));
        if (findItem) {
          totalPrice += cartItems[itemId] * findItem.price;
        }
      }
    }
    return totalPrice.toFixed(2);
  };

  const handleInputSearch = (searchValue) => {
    setGameItems(
      GAMES.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

  const addToCart = (itemId) => {
    setCartItems((prevState) => ({
      ...prevState,
      [itemId]: prevState[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevState) => {
      const newQuantity = prevState[itemId] > 0 ? prevState[itemId] - 1 : 0;

      if (newQuantity === 0) {
        toast.dark(`Item removed from cart!`, {
          type: "info",
          className: "Toastify__toast-container--top-custom",
        });
      }

      return {
        ...prevState,
        [itemId]: newQuantity,
      };
    });
  };

  const deepRemoveFromCart = (itemId) => {
    setCartItems((updatedCart) => {
      updatedCart = { ...updatedCart, [itemId]: 0 };
      return updatedCart;
    });
  };

  const emptyCart = () => {
    setCartItems(getDefaultCartValue());
  };

  const contextValue = {
    cartItems,
    addToCart,
    gameItems,
    removeFromCart,
    handleTotalPrice,
    deepRemoveFromCart,
    handleInputSearch,
    emptyCart,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
