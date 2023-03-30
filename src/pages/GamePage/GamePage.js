import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PokeballSeparator from "../../components/PokeballSeparator/PokeballSeparator";
import useFetch from "../../hooks/useFetch";
import { generateRandom, removeDashes } from "../../utils/utils";
import PokemonMainInfo from "../PokemonDetailPage/PokemonMainInfo/PokemonMainInfo";
import "./GamePage.scss";
import { FormattedMessage } from "react-intl";
import usePokemonColors from "../../hooks/usePokemonColors";

const POKEMON_URL = process.env.REACT_APP_API_URL + "/pokemon?limit=2000&offset=0";

const GamePage = () => {
  // Estados
  const [nameSelected, setNameSelected] = useState();
  const [gameIsSolved, setGameIsSolved] = useState(false);
  const [pokemonsList, setPokemonsList] = useState([]);
  const [options, setOptions] = useState([]);

  // Pokemon actual
  const [currentPokemonUrl, setCurrentPokemonUrl] = useState();
  const [pokemonData] = useFetch(currentPokemonUrl);

  // Hook footer / header
  const [headerBackground, footerBackground] = usePokemonColors(pokemonData);

  // Pedimos la lista completa de pokemons
  useEffect(() => {
    fetch(POKEMON_URL)
      .then((data) => data.json())
      .then((dataParsed) => {
        setPokemonsList(dataParsed);
        generateNewGamePlay(dataParsed);
      });
  }, []);

  const generateNewGamePlay = (dataParsed) => {
    const randomIndexes = Array.from({ length: 4 }, () => generateRandom(0, dataParsed.count));

    // Elegimos pokemos actual
    const currentPokemonIndex = randomIndexes[generateRandom(0, 3)];
    const currentPokemonFromList = dataParsed.results[currentPokemonIndex];
    setCurrentPokemonUrl(currentPokemonFromList.url);

    // Lista de nombres
    const newGameOptions = randomIndexes.map((index) => dataParsed.results[index].name);
    setOptions(newGameOptions);

    // Reset de juego
    setGameIsSolved(false);
    setNameSelected(null);
  };

  const selectOption = (name) => {
    if (!gameIsSolved) {
      setNameSelected(name);
    }
  };

  const getClassesForButton = (option) => {
    if (gameIsSolved) {
      if (option === pokemonData.name) {
        return "btn--option-correct";
      } else if (option === nameSelected) {
        return "btn--option-wrong";
      }
    } else {
      if (option === nameSelected) {
        return "btn--option-selected";
      }
    }
  };

  return (
    <div className="game-page page">
      <Header background={headerBackground} biggerPaddingBottom={true}></Header>
      <div className="game-page__content page__content">
        <div className="game-page__detail">
          <PokemonMainInfo hideData={!gameIsSolved} pokemonData={pokemonData}></PokemonMainInfo>
        </div>

        <PokeballSeparator></PokeballSeparator>

        <div className="game-page__options">
          {options.map((name) => (
            <button onClick={() => selectOption(name)} key={name} className={"btn btn--big btn--option game-page__button " + getClassesForButton(name)}>
              {removeDashes(name)}
            </button>
          ))}
        </div>

        <div className="game-page__solve">
          <button className="btn btn--link game-page__solve-btn" onClick={() => generateNewGamePlay(pokemonsList)}>
            <FormattedMessage id="game:play-again" />
          </button>

          <button className="btn game-page__solve-btn" disabled={gameIsSolved} onClick={() => setGameIsSolved(true)}>
            <FormattedMessage id="game:solve" />
          </button>
        </div>
      </div>

      <Footer background={footerBackground}></Footer>
    </div>
  );
};

export default GamePage;
