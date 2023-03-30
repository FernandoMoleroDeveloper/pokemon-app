import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import "./PokemonEvolutionItem.scss";

const PokemonEvolutionItem = ({ pokemon, currentPokemon }) => {
  const url = pokemon?.name ? `${process.env.REACT_APP_API_URL}/pokemon/${pokemon.name}` : null;
  const [pokemonData] = useFetch(url);

  return (
    <div className="pokemon-evolution-item">
      <img className="pokemon-evolution-item__image" src={pokemonData?.sprites?.other?.["official-artwork"]?.front_default} />
      <p className="pokemon-evolution-item__name">{pokemonData?.name}</p>
      {currentPokemon !== pokemonData?.name && (
        <NavLink to={"/pokemon/" + pokemonData?.id}>
          <button className="pokemon-evolution-item__show-more btn btn--small">
            <FormattedMessage id="general:more-info" />
          </button>
        </NavLink>
      )}
    </div>
  );
};

export default PokemonEvolutionItem;
