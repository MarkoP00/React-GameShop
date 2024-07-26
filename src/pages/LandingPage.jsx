import React from "react";
import image from "../assets/background/landingBg.jpg";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className=" wrapper relative h-screen w-screen overflow-hidden">
        <img
          src={image}
          alt="Background image"
          className="w-full h-full object-cover absolute z-0"
        />
        <main className="absolute inset-0 flex flex-col gap-2 justify-center items-center text-center text-white p-8 z-10">
          <h3 className="text-4xl font-bold text-mainColors-200 text-shadow">
            Discover Your Next Adventure!
          </h3>
          <p className="text-xl text-white mt-4 leading-10 font-semibold">
            Dive into a world of exciting possibilities and endless
            opportunities. <br></br>Start your journey with us and unlock the
            potential within.
          </p>

          <Link
            to="/gameList"
            id="hover-link"
            data-text="Awesome"
            className="relative inline-block text-white no-underline "
          >
            <span className="actual-text">&nbsp;explore &nbsp;</span>
            <span aria-hidden="true" className="hover-text">
              &nbsp;explore&nbsp;
            </span>
          </Link>
        </main>
      </div>
    </>
  );
}
