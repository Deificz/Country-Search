import React, { useState } from "react";
import Header from "../components/header";
import SearchBar from "../components/search_bar";
import SearchButton from "../components/search_button";
import { useTypewriter, Cursor } from "react-simple-typewriter";
export default function Home() {
  const [text1] = useTypewriter({
    words: ["nation", "language", "currency"],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 40,
  });

  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header/>
      <div className="flex flex-col items-center h-screen mt-40">
        <h1 className="text-3xl font-bold text-white">
          Know your <span className="text-green-300">{text1}</span>
        </h1>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-between w-80"
        >
          <SearchBar setCountry={setCountry} />
          <SearchButton />
        </form>
      </div>
    </>
  );
}
