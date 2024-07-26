import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { GameContext } from "../context/game-context";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchValue, setSearchInputValue] = useState("");
  const { handleInputSearch } = useContext(GameContext);

  const handleSearchInput = (value) => {
    setSearchInputValue(setSearchInputValue);
    handleInputSearch(value);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-background-400 border-b-[2px] h-[100px] px-10 text-xl border-b-mainColors-200 w-full flex justify-between items-center z-20 fixed top-0 left-0">
      <div className="logo flex items-center justify-between gap-10 ">
        <h3 className="cursor-pointer hover:text-mainColors-200 ease-in duration-100 text-2xl font-[600]">
          <Link to="/home" className="hover:bg-background-300 p-2 rounded-lg">
            Logo
          </Link>
        </h3>
        <div className="container-input relative ">
          <input
            type="text"
            placeholder="Search"
            name="text"
            className="input-focus-expand w-[150px] pt-3 pr-0 pb-3 pl-10 rounded-3xl border-[1px] border-mainColors-200 transition-all duration-200 outline-none opacity-80 focus:opacity-100 bg-background-300 "
            autoComplete="off"
            value={searchValue}
            onChange={(event) => handleSearchInput(event.target.value)}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute top-2/4 left-3 transform -translate-y-2/4 text-mainColors-200 hover:scale-110 transition ease-in duration-200 "
            style={{ color: "#66FCF1" }}
          />
        </div>
      </div>

      <nav className=" hidden md:flex gap-8">
        <ul className="flex gap-8">
          <li className="hover:text-mainColors-200 hover:bg-background-300 p-2 rounded-lg ease-in duration-100">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-mainColors-200 hover:bg-background-300 p-2 rounded-lg ease-in duration-100">
            <Link to="/news">News</Link>
          </li>
          <li className="hover:text-mainColors-200 hover:bg-background-300 p-2 rounded-lg ease-in duration-100">
            <Link to="/gameList">Games</Link>
          </li>
          <li className="hover:text-mainColors-200 hover:bg-background-300 p-2 rounded-lg ease-in duration-100">
            <Link to="/gameCart">Cart</Link>
          </li>
        </ul>
      </nav>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          <FontAwesomeIcon
            icon={isMobileMenuOpen ? faTimes : faBars}
            className="text-2xl text-mainColors-200"
          />
        </button>
      </div>
      <CSSTransition
        in={isMobileMenuOpen}
        timeout={300}
        classNames="nav-menu"
        unmountOnExit
      >
        <nav className="absolute top-[98px] right-0 w-[50%] bg-background-400 z-10 flex flex-col items-center md:hidden border-t-2 border-l-2 border-b-2 border-t-mainColors-200 border-l-mainColors-200 border-b-mainColors-200  rounded-bl-lg">
          <ul className="flex flex-col justify-center items-center gap-4 p-4 font-semibold ">
            <li className="hover:text-mainColors-200 ">
              <Link to="/" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li className="hover:text-mainColors-200">
              <Link to="/news" onClick={toggleMobileMenu}>
                News
              </Link>
            </li>
            <li className="hover:text-mainColors-200">
              <Link to="/gameList" onClick={toggleMobileMenu}>
                Games
              </Link>
            </li>
            <li className="hover:text-mainColors-200">
              <Link to="/gameCart" onClick={toggleMobileMenu}>
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </CSSTransition>
    </header>
  );
}
