import { Button } from "@nextui-org/react";
import { NextPage } from "next";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts";

const HomePage: NextPage = (props) => {

  console.log(props);

  return (
      <Layout title='Listado de Pokemons'>
        <Button color="gradient">
          Hola Mundo
        </Button>
      </Layout>
  )
}

export default HomePage;


export async function getStaticProps(context: any) {

  const { data } = await pokeApi.get('/pokemon?limit=151');

  return {
    props: {
      pokemons: data.results
    }, 
  }
}