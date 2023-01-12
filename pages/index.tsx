import { NextPage } from "next";
import { Grid } from "@nextui-org/react";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { PokemonCard } from "../components/pokemon";

type HomePageProps = {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<HomePageProps> = ({ pokemons }) => {

  return (
    <Layout title='Listado de Pokemons'>
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map((item) => (
            <PokemonCard key={item.id} pokemon={item} />
          ))}
      </Grid.Container>
    </Layout>
  )
}

export default HomePage;

export async function getStaticProps(context: any) {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }));

  return {
    props: {
      pokemons: pokemons
    },
  }
}