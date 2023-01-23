import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { SmallPokemon } from "../../interfaces"

type PokemonCardProps = {
  pokemon: SmallPokemon
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {

  const { id, name, img } = pokemon;

  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${ pokemon.name }`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card
        isHoverable
        isPressable
        onClick={onClick}
      >
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={img}
            width='100%'
            height={140}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}