import Router from "./utils/Router";
import {CountryProvider} from "./utils/data fetch/country_fetch";
function App() {
  return (
    <>
      <CountryProvider>
        <Router />
      </CountryProvider>
    </>
  );
}

export default App;
