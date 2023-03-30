import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import pokemonLogo from "../../assets/pokemon-logo.png";
import { FaArrowLeft } from "react-icons/fa";
import { LanguageSelector } from "../../App";
import { useContext } from "react";
import locationIcon from "../../assets/location-icon.png";

const Header = ({ background, biggerPaddingBottom, showLocationIcon }) => {
  const navigate = useNavigate();
  const { setLanguage } = useContext(LanguageSelector);

  return (
    <header
      className={`
      header
      ${background ? `background-${background}` : ""}
      ${biggerPaddingBottom ? "header--bigger-padding" : ""}
      ${showLocationIcon ? "header--with-location" : ""}
    `}
    >
      <button className="header__go-back" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>

      <NavLink to="/" className="header__link">
        <img className="header__logo-image" src={pokemonLogo} />
      </NavLink>

      <div className="header__lang">
        <button onClick={() => setLanguage("es-ES")} className="header__lang-btn">
          ES
        </button>
        <button onClick={() => setLanguage("en-EN")} className="header__lang-btn">
          EN
        </button>
      </div>

      {showLocationIcon && <img src={locationIcon} className="header__location-icon" />}
    </header>
  );
};

export default Header;
