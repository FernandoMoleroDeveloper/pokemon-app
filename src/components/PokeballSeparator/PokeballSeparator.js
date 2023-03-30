import pokeballGray from "../../assets/pokeball-gray.png";
import "./PokeballSeparator.scss";

const PokeballSeparator = ({ className }) => {
  return (
    <div className={"pokeball-separator " + className}>
      <span className="pokeball-separator__line"></span>
      <img className="pokeball-separator__image" src={pokeballGray} />
      <span className="pokeball-separator__line"></span>
    </div>
  );
};

export default PokeballSeparator;
