import React from "react";

export default function NewsItemInRow({ game, main }) {
  return (
    <div
      className={` bg-background-400 rounded-lg overflow-hidden shadow-lg flex flex-row transition-all transform h-full hover:shadow-main-200-shadow  duration-300 ${
        main ? "border-2 border-mainColors-400 spec" : "common"
      }`}
    >
      <img
        src={game.image}
        alt="Game News Image"
        className="w-[60%] h-full object-cover"
      />
      <div className="flex flex-col justify-center p-4 ">
        <div>
          <h3
            className={`text-lg font-semibold ${
              main ? "text-mainColors-400" : "text-mainColors-200"
            }  mb-2`}
          >
            {game.title}
          </h3>
        </div>
        <div className={`text-base ${main ? "text-mainColors-300" : ""} `}>
          {game.desc}
        </div>
      </div>
    </div>
  );
}
