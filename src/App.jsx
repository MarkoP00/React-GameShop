import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameList from "./pages/GameList.jsx";
import GameCart from "./pages/GameCart.jsx";
import Navbar from "./components/Navbar";
import { GameContextProvider } from "./context/game-context.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingleGame from "./components/SingleGame.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import News from "./pages/News.jsx";

export default function App() {
  return (
    <GameContextProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/home" element={<LandingPage></LandingPage>}></Route>
          <Route path="/gameList" element={<GameList></GameList>}></Route>
          <Route path="/gameCart" element={<GameCart></GameCart>}></Route>
          <Route path="/game/:id" element={<SingleGame />}></Route>
          <Route path="/news" element={<News></News>}></Route>
        </Routes>
      </BrowserRouter>
    </GameContextProvider>
  );
}
