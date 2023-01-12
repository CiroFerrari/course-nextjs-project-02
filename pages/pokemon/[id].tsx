import { useRouter } from "next/router";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { PokemonListResponse, SmallPokemon } from "../../interfaces";

type PokemonPageProps = {
  id: string,
  name: string
}

export default function PokemonPage({ id, name }: PokemonPageProps) {

  const router = useRouter();
  console.log(router.query);

  return (
    <Layout title='Algún pokémon'>
      <h1>{id} - {name}</h1>
    </Layout>
  );
}

export async function getStaticPaths(context: any) {

  return {
    paths: [
      {
        params: {
          id: '1'
        }
      }
    ],
    fallback: false
  }

}

export async function getStaticProps(context: any) {

  // const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  return {
    props: {
      id: 1,
      name: 'Bulbasaur'
    },
  }
}