import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import PokemonsPage from "./pages/PokemonsPage/PokemonsPage";
import PokemonDetailPage from "./pages/PokemonDetailPage/PokemonDetailPage";
import LocationDetailPage from "./pages/LocationDetailPage/LocationDetailPage";
import GamePage from "./pages/GamePage/GamePage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/pokemons" element={<PokemonsPage></PokemonsPage>}></Route>
          <Route path="/location/:locationName" element={<LocationDetailPage></LocationDetailPage>}></Route>
          <Route path="/pokemon/:pokemonId" element={<PokemonDetailPage></PokemonDetailPage>}></Route>
          <Route path="/game" element={<GamePage></GamePage>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
