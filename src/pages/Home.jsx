import React, { useEffect, useState } from "react";
import Header from "../components/header";
import SearchBar from "../components/search_bar";
import SearchButton from "../components/search_button";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useCountry } from "../utils/data fetch/country_fetch";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [country, setCountry] = useState("");
  const {get_country} = useCountry();
  const countryData = useSelector(state => state.country.country);
  const status = useSelector(state => state.country.status);

  const [text] = useTypewriter({
    words: ["nation", "language", "currency"],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 40,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    get_country(country);
    
  };

  useEffect(() => {
    if(status === "Loading")
    navigate("/info",{replace:true})
  },[status]);

  return (
    <>
      <Header/>
      <div className="flex flex-col items-center h-screen mt-40 2xl:mt-56">
        <h1 className="text-3xl font-bold text-white md:text-4xl 2xl:text-6xl">
          Know your <span className="text-green-300">{text}</span>
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
