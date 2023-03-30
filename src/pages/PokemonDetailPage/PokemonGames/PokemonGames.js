import { FormattedMessage } from "react-intl";
import "./PokemonGames.scss";

const PokemonGames = ({ games, className }) => {
  return (
    <div className={"pokemon-games " + className}>
      <h3 className="pokemon-games__title generic-title">
        <FormattedMessage id="pokemon-detail:games" />
      </h3>

      <div className="pokemon-games__list">
        {games?.map((game) => (
          <span className="pokemon-games__item btn btn--small btn--light" key={game.version?.name}>
            {game.version?.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonGames;
