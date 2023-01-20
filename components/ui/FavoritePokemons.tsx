import { Grid } from "@nextui-org/react";
import { FavoriteCardPokemon } from "./";

type FavoritePokemonsProps = {
  pokemons: number[]
}

export function FavoritePokemons({ pokemons }: FavoritePokemonsProps) {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
    {
      pokemons.map(id => (
        <FavoriteCardPokemon key={id} id={id} />
      ))
    }
  </Grid.Container>
  );
}