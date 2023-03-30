import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { transformAreaName } from "../../../utils/utils";
import "./PokemonLocations.scss";

const PokemonLocations = ({ pokemonData, className }) => {
  const [locations] = useFetch(pokemonData?.location_area_encounters);

  return (
    <div className={"pokemon-locations " + className}>
      <h3 className="pokemon-locations__title generic-title">
        <FormattedMessage id="pokemon-detail:locations" />
      </h3>
      <div className="pokemon-locations__list">
        {locations?.map((location) => (
          <div className="pokemon-locations_item" key={location?.location_area?.name}>
            <span className="pokemon-locations__area-name">{transformAreaName(location?.location_area?.name)}</span>
            <NavLink to={"/location/" + location?.location_area?.name}>
              <button className="btn btn--small pokemon-locations__show-more">
                <FormattedMessage id="general:more-info" />
              </button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonLocations;
