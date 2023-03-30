import "./App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PokemonsPage from "./pages/PokemonsPage/PokemonsPage";
import PokemonDetailPage from "./pages/PokemonDetailPage/PokemonDetailPage";
import LocationDetailPage from "./pages/LocationDetailPage/LocationDetailPage";
import GamePage from "./pages/GamePage/GamePage";
import { IntlProvider } from "react-intl";
import { createContext, useEffect, useState } from "react";
import English from "./lang/en.json";
import Spanish from "./lang/es.json";
import ScrollTop from "./components/ScrollTop/ScrollTop";

export const LanguageSelector = createContext();

function App() {
  // These are the states of the APP
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState(English);

  useEffect(() => {
    switch (locale) {
      case "es-ES":
        setMessages(Spanish);
        break;
      default:
        setMessages(English);
    }
  }, [locale]);

  return (
    <div className="app">
      <LanguageSelector.Provider value={{ language: locale, setLanguage: setLocale }}>
        <IntlProvider messages={messages} locale={locale}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/pokemons" element={<PokemonsPage></PokemonsPage>}></Route>
              <Route path="/pokemon/:pokemonId" element={<PokemonDetailPage></PokemonDetailPage>}></Route>
              <Route path="/location/:locationName" element={<LocationDetailPage></LocationDetailPage>}></Route>
              <Route path="/game" element={<GamePage></GamePage>}></Route>
            </Routes>
            <ScrollTop></ScrollTop>
          </HashRouter>
        </IntlProvider>
      </LanguageSelector.Provider>
    </div>
  );
}

export default App;
