import React from "react";
import Header from "../components/header";
import { useSelector } from "react-redux";

export default function Information() {
  const country = useSelector((state) => state.country.country);
  const status = useSelector((state) => state.country.status);
  
  console.log(country);
  return (
    <>
      <Header />
      <div className="flex mt-28 justify-center">
        {status === "Done" &&
          country.map((data) => (
            <ul key={data.area} className="flex flex-col justify-center  bg-slate-900 rounded-xl p-10 bg-opacity-80 border-2 border-dashed mx-5 flex-wrap ">
              <h1 className="text-white font-bold text-4xl mb-10">{data.name.common}</h1>
              <h2 className=" font-semibold text-red-200 text-xl">
                Capital: 
                <span className="text-green-300 ml-5">{data.capital ? data.capital : "N/A"}</span>
              </h2>
              <h2 className=" font-semibold text-red-200 text-xl mt-5">
                Population:
                <span className="text-green-300 ml-5"> {data.population}</span>
              </h2>
              <h2 className=" font-semibold text-red-200 text-xl mt-5">
                Language:
                <span className="text-green-300 ml-5"></span>
              </h2>
              <h2 className=" font-semibold text-red-200 text-xl mt-5">
                Currency:
                <span className="text-green-300 ml-5"></span>
              </h2>
            </ul>
          ))}
      </div>
    </>
  );
}
