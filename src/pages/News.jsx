import React from "react";
import NewsGameItem from "../components/NewsGameItem";
import NewsItemInRow from "../components/NewsItemInRow";
import { NEWS } from "../NEWS";

export default function News() {
  return (
    <section className="news flex justify-center items-center min-h-screen w-full mt-24 ">
      <main className="w-[80%] h-full flex flex-col items-center">
        <div className="pageTitle text-center">
          <h3 className="text-2xl font-bold my-4 border-t-2 border-b-2 border-mainColors-300 p-2">
            Latest Game News!
          </h3>
        </div>
        <div className="grid grid-cols-1 max-md:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {NEWS.slice(0, 6).map((game, index) => {
            if (index === 0) {
              return (
                <div
                  key={game.title}
                  className="col-span-1 md:col-span-2 lg:col-span-3"
                >
                  <NewsItemInRow game={game} main={true} />
                </div>
              );
            }
            return <NewsGameItem gameData={game} key={game.title} />;
          })}
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {NEWS.slice(6, 10).map((game) => (
            <div key={game.title} className="w-full p-4">
              <NewsItemInRow game={game} main={false} />
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}
