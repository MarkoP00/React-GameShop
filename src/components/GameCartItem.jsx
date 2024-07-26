import React, { useState, useRef, useContext } from "react";
import GlobalWarning from "./global/GlobalWarning";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { GameContext } from "../context/game-context";
import { toast } from "react-toastify";
import { CSSTransition } from "react-transition-group";

export default function GameCartItem({ gameData }) {
  const { addToCart, removeFromCart, cartItems, deepRemoveFromCart } =
    useContext(GameContext);

  const [warningVisible, setWarningVisible] = useState(false);
  const warningMessage = useRef("");

  const handleDeleteClick = () => {
    warningMessage.current = "Are you sure you want to remove this item?";
    setWarningVisible(true);
  };

  const handleWarningClose = (confirm) => {
    if (confirm) {
      deepRemoveFromCart(gameData.id);
      toast.dark("Item is removed from cart!", {
        type: "info",
        className: "Toastify__toast-container--top-custom",
        autoClose: 2500,
      });
    }
    setWarningVisible(false);
  };

  const convertedPrice = () => {
    if (gameData.price === 0) {
      return "Free";
    } else {
      return `$ ${(gameData.price * cartItems[gameData.id]).toFixed(2)}`;
    }
  };

  return (
    <>
      <CSSTransition
        in={warningVisible}
        timeout={300}
        classNames="global-warning"
        unmountOnExit
      >
        <>
          {warningVisible && (
            <GlobalWarning
              message={warningMessage.current}
              onClose={handleWarningClose}
            />
          )}
        </>
      </CSSTransition>

      <li className="relative w-64 h-80 bg-gray-900 shadow-lg rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-col justify-between p-4">
          <div>
            <h3 className="text-white text-2xl font-bold p-1">
              {gameData.title}
            </h3>
            <p className="text-gray-300 mt-2">{gameData.description}</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <button
              className="bg-red-600 text-white px-3 py-1 rounded-lg"
              onClick={() => removeFromCart(gameData.id)}
            >
              -
            </button>
            <p className="text-white">
              {" "}
              {convertedPrice()} x{cartItems[gameData.id]}
            </p>
            <button
              className="bg-green-600 text-white px-3 py-1 rounded-lg"
              onClick={() => addToCart(gameData.id)}
            >
              +
            </button>
          </div>
          <div className="deleteButton absolute right-4 top-5">
            <button className="text-xl" onClick={handleDeleteClick}>
              <FontAwesomeIcon
                icon={faTrash}
                className="text-mainColors-200 hover:scale-110 transition ease-in duration-200"
                style={{ color: "#66FCF1" }}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
        <img
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={gameData.image}
          alt={gameData.title}
        />
      </li>
    </>
  );
}
