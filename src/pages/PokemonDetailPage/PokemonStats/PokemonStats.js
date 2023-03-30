import { FormattedMessage } from "react-intl";
import "./PokemonStats.scss";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";

const PokemonStats = ({ stats, className }) => {
  return (
    <div className={"pokemon-stats " + className}>
      <h3 className="pokemon-stats__title generic-title">
        <FormattedMessage id="pokemon-detail:stats" />
      </h3>
      <div className="pokemon-stats__stats">
        {stats?.map((item) => (
          <div className="pokemon-stats__data-row" key={item.stat.name}>
            <span className="pokemon-stats__data-name">
              <FormattedMessage id={`pokemon-detail:${item.stat.name}`} />
            </span>
            <span className="pokemon-stats__data-value">{item.base_stat}</span>
            <ProgressBar value={item.base_stat}></ProgressBar>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonStats;
