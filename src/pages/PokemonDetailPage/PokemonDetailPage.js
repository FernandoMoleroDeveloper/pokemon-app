import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./PokemonDetailPage.scss";
import PokemonMainInfo from "./PokemonMainInfo/PokemonMainInfo";
import PokemonStats from "./PokemonStats/PokemonStats";
import PokemonEvolutions from "./PokemonEvolutions/PokemonEvolutions";
import PokemonLocations from "./PokemonLocations/PokemonLocations";
import PokemonMoves from "./PokemonMoves/PokemonMoves";
import PokemonGames from "./PokemonGames/PokemonGames";
import PokeballSeparator from "../../components/PokeballSeparator/PokeballSeparator";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import usePokemonColors from "../../hooks/usePokemonColors";

const PokemonDetailPage = () => {
  const { pokemonId } = useParams();

  const POKEMON_URL = process.env.REACT_APP_API_URL + "/pokemon/" + pokemonId;
  const [pokemonData] = useFetch(POKEMON_URL);
  const [headerBackground, footerBackground] = usePokemonColors(pokemonData);

  return (
    <div className="pokemon-detail-page page">
      <Header biggerPaddingBottom={true} background={headerBackground}></Header>

      <div className="pokemon-detail-page__content page__content">
        <PokemonMainInfo className="pokemon-detail-page__main-info" pokemonData={pokemonData}></PokemonMainInfo>
        <PokeballSeparator className="pokemon-detail-page__separator"></PokeballSeparator>
        <PokemonStats className="pokemon-detail-page__stats" stats={pokemonData?.stats}></PokemonStats>
        <PokeballSeparator className="pokemon-detail-page__separator mobile-only"></PokeballSeparator>
        <PokemonEvolutions className="pokemon-detail-page__evolutions" species={pokemonData?.species}></PokemonEvolutions>
        <PokeballSeparator className="pokemon-detail-page__separator"></PokeballSeparator>
        <PokemonLocations className="pokemon-detail-page__locations" pokemonData={pokemonData}></PokemonLocations>
        <PokeballSeparator className="pokemon-detail-page__separator mobile-only"></PokeballSeparator>
        <PokemonMoves className="pokemon-detail-page__moves" pokemonMoves={pokemonData?.moves}></PokemonMoves>
        <PokeballSeparator className="pokemon-detail-page__separator pokemon-detail-page__separator--last"></PokeballSeparator>
        <PokemonGames className="pokemon-detail-page__games" games={pokemonData?.game_indices}></PokemonGames>
      </div>

      <Footer background={footerBackground}></Footer>
    </div>
  );
};

export default PokemonDetailPage;
