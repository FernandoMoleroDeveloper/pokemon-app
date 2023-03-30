import { FormattedMessage } from "react-intl";
import "./PokemonMainInfo.scss";
import { roundedToFixed } from "../../../utils/utils";

const PokemonMainInfo = ({ pokemonData, hideData, className }) => {
  return (
    <div className={"pokemon-main-info " + className}>
      <img className={`show-slow pokemon-main-info__image ${hideData ? "pokemon-main-info__image--hide" : ""}`} src={pokemonData?.sprites?.other?.["official-artwork"]?.front_default} />
      <p className="pokemon-main-info__number">#{pokemonData?.id || ""}</p>
      <p className="pokemon-main-info__name">{hideData ? "???" : pokemonData?.name || "- -"}</p>
      <div className="pokemon-main-info__types">
        {pokemonData?.types.map((item) => (
          <span className={`btn btn--small pokemon-main-info__type background-${item.type.name}`} key={item.type.name}>
            {item.type.name}
          </span>
        ))}
      </div>
      <div className="pokemon-main-info__data">
        <span className="pokemon-main-info__attr">
          <FormattedMessage id="pokemons:weight" />:
        </span>{" "}
        {roundedToFixed(pokemonData?.weight, 10, 1)}KG
        <span className="pokemon-main-info__attr">
          <FormattedMessage id="pokemons:height" />:
        </span>{" "}
        {roundedToFixed(pokemonData?.height, 10, 1)}M
      </div>
    </div>
  );
};

export default PokemonMainInfo;
