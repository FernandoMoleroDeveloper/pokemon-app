import { NavLink } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./PokemonCard.scss";
import { FormattedMessage } from "react-intl";
import { getBackgroundForPokemon, roundedToFixed } from "../../utils/utils";

const PokemonCard = ({ pokemon, showOnlyImage, className }) => {
  const [pokemonData] = useFetch(pokemon?.url);

  if (showOnlyImage) {
    return (
      <NavLink className={className} to={`/pokemon/${pokemonData?.id}`}>
        <img className="pokemon-card__image-only" src={pokemonData?.sprites?.other?.["official-artwork"]?.front_default} />
      </NavLink>
    );
  }

  return (
    <div className={"pokemon-card " + className}>
      <img className="pokemon-card__image" src={pokemonData?.sprites?.other?.["official-artwork"]?.front_default} />
      <p className="pokemon-card__number">#{pokemonData?.id || ""}</p>
      <p className="pokemon-card__name">{pokemonData?.name || "- -"}</p>
      <div className="pokemon-card__data">
        <span className="pokemon-card__attr">
          <FormattedMessage id="pokemons:weight" />:
        </span>{" "}
        {roundedToFixed(pokemonData?.weight, 10, 1)}KG
        <span className="pokemon-card__attr">
          <FormattedMessage id="pokemons:height" />:
        </span>{" "}
        {roundedToFixed(pokemonData?.height, 10, 1)}M
      </div>

      <NavLink to={`/pokemon/${pokemonData?.id}`}>
        <button className="btn btn--small pokemon-card__more-info">+ INFO</button>
      </NavLink>
      <div className="pokemon-card__card" style={getBackgroundForPokemon(pokemonData)}></div>
    </div>
  );
};

export default PokemonCard;
