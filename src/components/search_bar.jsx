import React from "react";

export default function search_bar({ setCountry }) {
  const handleInput = (e) => {
    setCountry(e.target.value);
  };
  return (
    <div className="flex items-center justify-between w-80 md:w-96">
      <i className="px-3 py-2 text-4xl text-blue-200 md:text-5xl 2xl:6xl fa-solid fa-map-location-dot "></i>
      <input
        type="text"
        className="w-64 px-3 py-3 my-10 text-xl border-2 border-black md:w-72 md:text-2xl 2xl:w-80 2xl:text-3xl rounded-xl"
        placeholder="Philippines"
        onChange={handleInput}
      />
    </div>
  );
}
