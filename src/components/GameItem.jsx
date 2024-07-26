import { GameContext } from "../context/game-context";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function GameItem({ gameData }) {
  const { cartItems, addToCart } = useContext(GameContext);
  const navigate = useNavigate();

  const navigateToSingleGamePage = (id) => {
    navigate(`/game/${id}`);
  };

  const handleAddToCart = (id) => {
    toast.dark("Item added to cart!", {
      type: "success",
      className: "Toastify__toast-container--top-custom",
      autoClose: 2500,
    });
    addToCart(id);
  };

  return (
    <li
      className="relative bg-background-200 cursor-pointer rounded-lg flex flex-col overflow-hidden max-h-[420px] xl:min-h-[400px] hover:shadow-main-200-shadow transition-shadow duration-300 group"
      onClick={() => navigateToSingleGamePage(gameData.id)}
    >
      <div className="gameItemIcon flex-shrink-0 h-[45%] w-full overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
          src={gameData.image}
          alt={gameData.title}
        />
      </div>
      <div className="gameItemContent flex flex-col justify-between flex-grow p-4">
        <div className="gameItemTitle mb-2 text-center">
          <h3 className="text-xl font-semibold text-mainColors-200">
            {gameData.title}
          </h3>
        </div>
        <div className="gameItemDescription mb-4 text-center">
          <p className="">{gameData.description}</p>
        </div>
        <div className="gameItemButtonPrice flex justify-between items-center mt-auto">
          <button
            onClick={(e) => {
              e.stopPropagation(); //preventing singleGame click
              handleAddToCart(gameData.id);
            }}
            className="bg-mainColors-300 text-white py-2 px-4 rounded-lg hover:bg-mainColors-500 transition ease-in duration-200"
          >
            Add to Cart
          </button>
          <p className="text-xl font-semibold text-mainColors-400">
            ${gameData.price}
          </p>
        </div>
      </div>
    </li>
  );
}
