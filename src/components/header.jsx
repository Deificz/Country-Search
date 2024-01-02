import React from "react";
import img_logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
export default function header() {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
      <button
        onClick={backToHome}
        className="flex items-end text-2xl font-bold text-white"
      >
        <img
          src={img_logo}
          alt=""
          className="h-16 mt-5 ml-5 md:h-24 2xl:h-32"
        />
        <h1 className="text-red-300 md:text-4xl 2xl:text-5xl">
          Country <span className="text-green-300">Searcher</span>
        </h1>
      </button>
    </>
  );
}
