import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pokemons">Pokemons</NavLink>
      <NavLink to="/game">Game</NavLink>
    </header>
  );
};

export default Header;
