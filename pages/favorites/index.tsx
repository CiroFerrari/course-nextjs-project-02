import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import NoFavorites from "../../components/ui/NoFavorites";
import { localFavorites } from "../../utils";

export default function FavoritesPage() {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout>

      {
        (favoritePokemons.length === 0)
        ? (
          <NoFavorites />
        )
        : (
          <p>Hay favoritos</p>
        )
      }

    </Layout>
  );
}