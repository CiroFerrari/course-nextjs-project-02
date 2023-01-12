import { useRouter } from "next/router";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";

type PokemonPageProps = {
  pokemon: Pokemon
}

export default function PokemonPage({ pokemon }: PokemonPageProps) {

  const router = useRouter();

  return (
    <Layout title='Algún pokémon'>
      <h1>{pokemon.name}</h1>
    </Layout>
  );
}

export async function getStaticPaths(context: any) {

  const pokemon151 = [...Array(151)].map((value, index) => `${index+1}`)

  return {
    paths: pokemon151.map( id => ({
      params: { id }
    })),
    fallback: false
  }

}

export async function getStaticProps(context: any) {

  const { params } = context;
  const { id } = params as { id: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data
    },
  }
}