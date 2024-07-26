import React from "react";

export default function NewsGameItem({ gameData }) {
  return (
    <div className="newsItem hover:shadow-main-200-shadow  duration-300 bg-background-400  rounded-lg overflow-hidden shadow-lg w-full h-[400px] transition-all transform ">
      <div className="h-[50%]">
        <img
          src={gameData.image}
          alt="Game News Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2 ">
        <h3 className="text-lg font-semibold text-mainColors-200 mb-2">
          {gameData.title}
        </h3>
        <p className="text-base ">{gameData.desc}</p>
      </div>
    </div>
  );
}
