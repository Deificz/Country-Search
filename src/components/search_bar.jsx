import React from "react";

export default function search_bar({ setCountry }) {
  const handleInput = (e) => {
    setCountry(e.target.value);
  };
  return (
    <div className="flex items-center justify-between w-80 ">
      <i className="fa-solid fa-map-location-dot text-blue-200 text-4xl px-3 py-2  "></i>
      <input
        type="text"
        className="px-3 py-3 my-10 text-xl w-64 rounded-xl border-2 border-black"
        placeholder="Philippines"
        onChange={handleInput}
      />
    </div>
  );
}
