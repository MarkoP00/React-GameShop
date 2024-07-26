import React, { useState, useRef } from "react";
import GameCartItem from "../components/GameCartItem";
import { GameContext } from "../context/game-context";
import { useContext } from "react";
import { GAMES } from "../GAMES";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { toast } from "react-toastify";
import GlobalWarning from "../components/global/GlobalWarning";

export default function GameCart() {
  const { cartItems, handleTotalPrice, emptyCart } = useContext(GameContext);
  const [warningVisible, setWarningVisible] = useState(false);
  const warningMessage = useRef("");

  const navigate = useNavigate();
  const totalAmount = handleTotalPrice();

  const finishOrder = () => {
    confetti();
    emptyCart();

    toast.dark("Order submitted!", {
      type: "success",
      className: "Toastify__toast-container--top-custom",
      autoClose: 2500,
    });

    var duration = 2 * 2000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: {
            x: randomInRange(0.1, 0.3),
            y: Math.random() - 0.2,
          },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: {
            x: randomInRange(0.7, 0.9),
            y: Math.random() - 0.2,
          },
        })
      );
    }, 250);
  };

  const cartItemsWithQuantity = Object.entries(cartItems)
    .filter(([_, quantity]) => quantity > 0)
    .map(([gameId, quantity]) => {
      const game = GAMES.find((g) => g.id === parseInt(gameId));
      return { ...game, quantity };
    });

  const handleWarning = (confirm) => {
    if (confirm) {
      finishOrder();
    }
    setWarningVisible(false);
  };

  const showWarning = (message) => {
    warningMessage.current = message;
    setWarningVisible(true);
  };
  return (
    <section className="mt-[calc(120px+1rem)]">
      <h1 className="m-auto text-center text-2xl font-bold border-t-2 border-b-2 border-mainColors-300 p-2 my-5 w-60">
        Your Cart
      </h1>
      {cartItemsWithQuantity.length > 0 ? (
        <ul className="flex flex-wrap justify-center gap-5 p-5">
          {cartItemsWithQuantity.map((game) => (
            <GameCartItem key={game.id} gameData={game} />
          ))}
        </ul>
      ) : (
        <p className="text-center">Your Cart is Empty!</p>
      )}
      {cartItemsWithQuantity.length > 0 && (
        <div className="checkout flex justify-center flex-col items-center gap-5 mb-5">
          <p className="bg-background-300 text-mainColors-200 p-2 w-60 text-center rounded-lg">
            Subtotal: ${totalAmount}
          </p>
          <div className="flex gap-5">
            <button
              onClick={() => navigate("/gameList")}
              className="cartBtn cursor-pointer py-4 px-7 rounded-3xl border-3 border-gray-700 font-bold text-xs text-white bg-[#222222] transition-all duration-300 hover:scale-110 border-none active:scale-95"
            >
              Continue Shopping
            </button>
            <button
              onClick={() =>
                showWarning("Are you sure you want to submit the order?")
              }
              className="cartBtn cursor-pointer py-4 px-7 rounded-3xl border-3 border-gray-700 font-bold text-xs text-white bg-[#222222] transition-all duration-300 hover:scale-110 border-none active:scale-95"
            >
              Finish Order
            </button>
          </div>
        </div>
      )}
      {warningVisible && (
        <GlobalWarning
          message={warningMessage.current}
          onClose={handleWarning}
        />
      )}
    </section>
  );
}
