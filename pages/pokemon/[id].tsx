import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";

export default function PokemonPage() {

  const router = useRouter();
  console.log(router.query);

  return (
    <Layout title='Algún pokémon'>
      <h1>Hola mundo</h1>
    </Layout>
  );
}