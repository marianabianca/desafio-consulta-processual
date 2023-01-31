import {
  Flex,
  Heading,
  Text,
  Button,
  Divider,
  Spinner
} from '@chakra-ui/react'
import { useParams, Link } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from 'react';
import { Busca } from "./PaginaBusca"

function ProcessoItem(props) {
  return (
    <Flex
      direction="row"
      w="40rem"
      justifyContent="space-between"
      align="center"
    >
      <Flex direction="column">
        <Heading as="h2" size="md">
          Processo n. {props.cnj}
        </Heading>
        <Text fontSize="sm">
          Distribuído em {props.date}
        </Text>
      </Flex>
      <Link
        to={{
        pathname: `/processos/${props.cnj}`
        }}
      >
        <Button colorScheme="blue">
          VISUALIZAR
        </Button>
      </Link>
    </Flex>
  )

}

export function PaginaListaProcessos() {
  const { id } = useParams();
  const [processos, setProcessos] = useState(undefined);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/processos?tribunal=${id}`)
      .then((response) => {
        setProcessos(response.data.data)
      })
  }, [id]);

  return (
    <Flex align="center" justify="center" direction="column" h="100vh">
      <Busca />
      {
        processos ?
        <div>
          <Heading as="h1" size="lg" my="2rem">
            Tribunal {id}
          </Heading>
          {
            processos.map((processo, index) => {
              return (
                <div>
                  {index > 0 && <Divider w="40rem" my="1rem" />}
                  <ProcessoItem cnj={processo.cnj} date={processo.dataInicial} />
                </div>
              )
            })
          }
        </div>
        :
        <Spinner size="xl" mt="2rem" />
      }
    </Flex>
  )
}