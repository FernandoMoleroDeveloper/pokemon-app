import { customTestingRender } from "../../utils/test-utils";
import PokemonCard from "./PokemonCard";
import { screen } from "@testing-library/react";

describe("PokemonCard component", () => {
  test("Render pokemon card", () => {
    const { container } = customTestingRender(<PokemonCard></PokemonCard>);
    expect(container.querySelector(".pokemon-card")).toBeInTheDocument();
  });

  test("request bulbasur and show all info", async () => {
    const mockPokemon = {
      url: "https://pokeapi.co/api/v2/pokemon/1/",
      name: "bulbasaur",
    };

    const { container } = customTestingRender(<PokemonCard pokemon={mockPokemon}></PokemonCard>);
    await screen.findByText("bulbasaur");
    await screen.findByText("#1", { exact: false });
    await screen.findByText("6.9KG", { exact: false });
    await screen.findByText("0.7M", { exact: false });
    const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png";
    const image = container.querySelector(".pokemon-card__image");
    expect(image).toHaveAttribute("src", imageUrl);
    screen.debug();
  });
});
