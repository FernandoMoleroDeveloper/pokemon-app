import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import "./PokemonsPage.scss";
import useFetch from "../../hooks/useFetch";
import { usePagination } from "../../hooks/usePaginator";

const API_URL = `${process.env.REACT_APP_API_URL}/pokemon?offset=0&limit=2000`;

const PokemonsPage = () => {
  const [pokemonsData] = useFetch(API_URL);
  const [firstPokemons, showMorePokemons, theAreMore] = usePagination(pokemonsData?.results);

  return (
    <div className="pokemons-page page">
      <Header></Header>

      <div className="page__content pokemons-page__content">
        <div className="pokemons-page__pokemon-list">
          {firstPokemons.map((pokemon) => (
            <PokemonCard className={"show-slow"} key={pokemon.name} pokemon={pokemon}></PokemonCard>
          ))}
        </div>

        {theAreMore && (
          <button onClick={showMorePokemons} className="btn pokemons-page__show-more">
            + MORE
          </button>
        )}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default PokemonsPage;
