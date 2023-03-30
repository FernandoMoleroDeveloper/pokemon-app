import { FormattedMessage } from "react-intl";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PokeballSeparator from "../../components/PokeballSeparator/PokeballSeparator";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import useFetch from "../../hooks/useFetch";
import { usePagination } from "../../hooks/usePaginator";
import "./LocationDetailPage.scss";

const LocationDetailPage = () => {
  const { locationName } = useParams();
  const LOCATION_URL = `${process.env.REACT_APP_API_URL}/location-area/${locationName}`;
  const [locationData] = useFetch(LOCATION_URL);
  const [firstPokemons, showMore, theAreMore] = usePagination(locationData?.pokemon_encounters);

  return (
    <div className="location-detail-page page">
      <Header showLocationIcon={true}></Header>
      <div className="location-detail-page__content page__content">
        <h1 className="location-detail-page__title">{locationData?.names?.[0]?.name}</h1>

        <PokeballSeparator />

        <div className="location-detail-page__pokemon-list">
          {firstPokemons.map((pokemon) => (
            <PokemonCard className={"show-slow"} showOnlyImage={true} key={pokemon.pokemon.name} pokemon={pokemon.pokemon} />
          ))}
        </div>

        {theAreMore && (
          <button className="btn location-detail-page__show-more" onClick={showMore}>
            <FormattedMessage id="general:show-more" />
          </button>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LocationDetailPage;
