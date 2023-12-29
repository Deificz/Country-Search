import React, { useContext } from "react";
import { CountryContext } from "../Contexts";
import { useDispatch} from 'react-redux'
import { SET_COUNTRY, SET_STATUS } from "../../reducers/countrySlice";

export function CountryProvider({children}) {

  const dispatch = useDispatch();

  async function get_country(name){
    try{
      const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      dispatch(SET_STATUS("Loading"))

      if(response.ok){
        const countryData = await response.json();
        dispatch(SET_COUNTRY(countryData));
        dispatch(SET_STATUS("Done"));
      }else{
        dispatch(SET_STATUS("Failed to fetch country"));
      }
    }catch(error){
      console.error(error);
      dispatch(SET_STATUS("Failed server connection"));
    }
  }

  const countryValues = {
    get_country,
  };
  return <CountryContext.Provider value={countryValues}>{children}</CountryContext.Provider>;
}

export function useCountry() {
  const context = useContext(CountryContext);
  if (context == undefined)
    throw new Error("Context was used outside the provider");
  return context;
}
