import {
  Heading,
  Text,
  Flex,
  Divider,
  Spinner
} from '@chakra-ui/react'
import { useParams } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from 'react';
import { Busca } from "./PaginaBusca"

function ProcessoMovimentacao(props) {
  return (
    <Flex direction="column" padding="1rem">
      <Text fontSize="xs" color="blackAlpha.700" mb="0.25rem">
        {props.movimentacao.data}
      </Text>
      <Text fontSize="md">
        {props.movimentacao.descricao}
      </Text>
    </Flex>
  )
}

function TabelaProcesso(props) {
  props.movimentacoes.sort((a, b) => (a.data > b.data) ? 1 : -1)

  return (
    <Flex direction="column" borderWidth='1px' borderColor="black" w="40rem" mr="2.5rem">
      <Heading as="h1" size="md" padding="1rem" backgroundColor="blackAlpha.200">
        Movimentações
      </Heading>
      {
        props.movimentacoes.map((movimentacao, index) => {
          return (
            <div>
              {index > 0 && <Divider />}
              <ProcessoMovimentacao movimentacao={movimentacao} />
            </div>
          )
        })
      }
    </Flex>
  )
}

function PartesEnvolvidas(props) {
  return (
    <Flex direction="column" align="flex-start">
      <Heading size="xs" mb="0.5rem">
        Partes envolvidas
      </Heading>
      <Text fontSize="sm">
        {props.processo.autor}
      </Text>
      <Text fontSize="xs">
        Autor
      </Text>
      <Text fontSize="sm" mt="0.5rem">
        {props.processo.reu}
      </Text>
      <Text fontSize="xs">
        Reu
      </Text>
    </Flex>
  )
}

function ProcessoNaoEncontrado() {
  return (
    <Flex align="start" direction="column" mt="3rem">
      <Heading as="h1" size="lg">
        Processo não encontrado
      </Heading>
    </Flex>
  )
}

export function PaginaProcesso() {
  const notFound = "Não encontrado"
  const { cnj } = useParams();
  const [processo, setProcesso] = useState(undefined);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/processos?cnj=${cnj}`)
      .then((response) => {
        setProcesso(response.data.data[0])
      })
      .catch(_ =>
        setProcesso(notFound)
      )
  }, [cnj]);

  return (
    <Flex align="center" justify="center" direction="column" h="100vh">
      <Busca />
      {
        processo ?
          (
            processo === notFound ?
              <ProcessoNaoEncontrado />
              :
              <Flex align="start" direction="column" mt="3rem">
                <Heading as="h1" size="lg">Processo n. {processo.cnj}</Heading>
                <Text fontSize="sm" mb="1rem">Distribuído em {processo.dataInicial}</Text>
                <Flex direction="row">
                  <TabelaProcesso movimentacoes={processo.movimentacoes} />
                  <Flex direction="column">
                    <PartesEnvolvidas processo={processo} />
                  </Flex>
                </Flex>
              </Flex>
          )
          :
          <Spinner size="xl" mt="2rem" />
      }
    </Flex>
  )
}
