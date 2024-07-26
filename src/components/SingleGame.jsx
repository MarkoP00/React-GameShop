import React from "react";
import { useParams } from "react-router-dom";
import { GAMES } from "../GAMES";
import { useContext } from "react";
import { GameContext } from "../context/game-context";
import { toast } from "react-toastify";

export default function SingleGame() {
  const { id } = useParams();
  const { addToCart } = useContext(GameContext);
  const numericId = Number(id);

  const handleAddToCart = (id) => {
    addToCart(id);
    toast.dark("Item added to cart!", {
      type: "success",
      className: "Toastify__toast-container--top-custom",
    });
  };

  const singleGame = GAMES.find((game) => {
    return game.id === id || game.id === numericId;
  });

  if (!singleGame) {
    return <p>Game not found!</p>;
  }

  return (
    <>
      <section className="flex justify-center items-center w-full min-h-[100vh] relative z-10 bg-background-200 bg-opacity-30 py-20 ">
        <div className="SingleGameContent flex flex-col justify-center items-center w-4/5 md:w-3/5 lg:w-2/5 p-7 bg-background-200 bg-opacity-85 rounded-lg shadow-lg mt-[50px] gap-y-4">
          <div className="image ">
            <img
              src={singleGame.image}
              alt="game"
              className="w-full h-[18rem] object-cover rounded-lg"
            />
          </div>
          <div className="singleGameTitle ">
            <h3 className="text-2xl font-600 text-mainColors-200">
              {singleGame.title}
            </h3>
          </div>
          <div className="singleGameDesc  leading-8">
            <p className="tracking-wider">{singleGame.fullDescription}</p>
          </div>
          <div className="w-full bg-background-300 text-center ">
            <p className="text-mainColors-400 font-medium p-2 ">
              ${singleGame.price}
            </p>
          </div>
          <div className="singleGameBtn">
            <button
              className="bg-mainColors-300 text-white py-2 px-4 rounded-lg hover:bg-mainColors-500 transition ease-in duration-200"
              onClick={() => handleAddToCart(singleGame.id)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </section>

      <div className="bgImage fixed top-0 left-0 w-full h-full z-0">
        <img
          src={singleGame.image}
          alt=""
          className="bg-no-repeat object-cover w-full h-full"
        />
      </div>
    </>
  );
}
