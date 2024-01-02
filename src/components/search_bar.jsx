import React from "react";

export default function search_bar({ setCountry }) {
  const handleInput = (e) => {
    setCountry(e.target.value);
  };
  return (
    <div className="flex items-center justify-between w-fit">
      <i className="px-3 py-2 text-4xl text-blue-200 md:text-5xl 2xl:text-7xl fa-solid fa-map-location-dot "></i>
      <input
        type="text"
        className="w-64 p-3 my-10 2xl:my-14 text-xl border-2 border-black md:p-4 2xl:p-6 md:w-72 md:text-2xl 2xl:w-96 2xl:text-4xl rounded-xl"
        placeholder="Philippines"
        onChange={handleInput}
      />
    </div>
  );
}
