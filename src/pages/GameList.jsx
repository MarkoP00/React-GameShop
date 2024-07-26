import React from "react";
// import { GAMES } from "../GAMES.js";
import GameItem from "../components/GameItem.jsx";
import { useContext } from "react";
import { GameContext } from "../context/game-context.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function GameList() {
  const { gameItems } = useContext(GameContext);

  return (
    <section
      className="flex flex-col items-center p-5 sm:p-5 md:p-8 lg:p-10 xl:p-15 min-h-[100vh] mt-[calc(70px+1rem)]"
      style={{
        background:
          "linear-gradient(to bottom, #0B0C10, rgba(0, 0, 0, 0.5)), linear-gradient( #0B0C10, #4682B4)",
      }}
    >
      <h1 className="text-2xl font-bold my-4 border-t-2 border-b-2 border-mainColors-300 p-2">
        Game list
      </h1>
      <main className="w-full max-w-[1500px]">
        {gameItems.length === 0 ? (
          <p className="text-center text-[20px] font-[400] text-white">
            No games found.
          </p>
        ) : (
          <TransitionGroup className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 w-full">
            {gameItems.map((game) => (
              <CSSTransition key={game.id} timeout={300} classNames="game-item">
                <GameItem key={game.id} gameData={game} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </main>
    </section>
  );
}
