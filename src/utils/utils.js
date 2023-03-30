export const roundedToFixed = (float = 0, divider = 1, digits = 1) => {
  const numberToFix = float / divider;
  const rounder = Math.pow(10, digits);
  const rounded = (Math.round(numberToFix * rounder) / rounder).toFixed(digits);
  return rounded;
};

export const getPokemonlistFromEvolutions = (evolutions) => {
  if (!evolutions?.chain) {
    return [];
  }

  const pokemonList = getSpecies(evolutions.chain);

  return pokemonList;
};

const getSpecies = (chain) => {
  if (chain.evolves_to?.[0]) {
    return [chain.species, ...getSpecies(chain.evolves_to?.[0])];
  }

  return [chain.species];
};

export const transformAreaName = (areaName) => {
  let newName = areaName.replace("-area", "");
  newName = removeDashes(newName);
  return newName;
};

export const removeDashes = (text) => {
  return text ? text.replace(/-/g, " ") : "";
};

export const pokemonTypeColors = {
  bug: "#A8B821",
  electric: "#F8D030",
  fire: "#F07F2F",
  grass: "#78C84F",
  normal: "#A9A878",
  rock: "#A9A8A3",
  dark: "#6F5848",
  fairy: "#FFA3B1",
  flying: "#A890F0",
  ground: "#E0C069",
  poison: "#A040A1",
  steel: "#B8B8D0",
  dragon: "#7038F9",
  fighting: "#C03028",
  ghost: "#705798",
  ice: "#98D8D8",
  physchic: "#F85888",
  water: "#6890F0",
  default: "#495F7C",
};

export const getBackgroundForPokemon = (pokemonData) => {
  const firstPokemonType = pokemonData?.types?.[0]?.type?.name;
  const secondPokemonType = pokemonData?.types?.[1]?.type?.name;

  const firstTypeColor = pokemonTypeColors[firstPokemonType] || pokemonTypeColors.default;
  const secondTypeColor = pokemonTypeColors[secondPokemonType] || pokemonTypeColors[firstPokemonType] || pokemonTypeColors.default;

  return {
    background: `linear-gradient(to right, ${firstTypeColor}, ${secondTypeColor})`,
  };
};

export const generateRandom = (min = 0, max = 100) => {
  const difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;

  return rand;
};
