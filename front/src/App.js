import { 
  ChakraProvider,
  Select,
  Input,
  Button,
  Heading,
  Text,
  Flex,
  Divider
} from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function Busca() {
  return (
    <Flex align="center" direction="row" w="40rem" justifyContent="space-between">
      <Select placeholder='Tribunal' w="16rem">
        <option value='option1'>Tribunal 1</option>
        <option value='option2'>Tribunal 2</option>
        <option value='option3'>Tribunal 3</option>
      </Select>
      <Input placeholder='Número de processo' w="16rem"/>
      <Button colorScheme='blue'>BUSCAR</Button>
    </Flex>
  )
}

function PaginaBusca() {
  return (
    <Flex align="center" justify="center" h="100vh">
      <Flex align="center" direction="column">
        <Heading as="h4" size="lg">Busca</Heading>
        <Text fontSize="md" mt="0.5rem" mb="1rem">
          Selecione o tribunal para listar os processos ou buscar pelo número unificado
        </Text>
        <Busca />
      </Flex>
    </Flex>
  )
}

function ProcessoMovimentacao() {
  return (
    <Flex direction="column" padding="1rem">
      <Text fontSize="xs" color="blackAlpha.700" mb="0.25rem">
        DATA
      </Text>
      <Text fontSize="md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur mattis erat ornare lectus mattis, ac ultricies odio tempus.
        Suspendisse potenti. Vivamus nec ex ut augue egestas imperdiet.
      </Text>
    </Flex>
  )
}

function TabelaProcesso() {
  return (
    <Flex direction="column" borderWidth='1px' borderColor="black" w="40rem">
      <Heading as="h1" size="md" padding="1rem" backgroundColor="blackAlpha.200">Movimentações</Heading>
      <Divider />
      <ProcessoMovimentacao />
      <Divider />
      <ProcessoMovimentacao />
      <Divider />
      <ProcessoMovimentacao/>
    </Flex>
  )
}

function PaginaProcesso() {
  return (
    <div>
      <Flex align="center" justify="center" direction="column" h="100vh">
        <Busca />
        <Flex align="start" direction="column" mt="5rem">
          <Heading as="h1" size="lg">Processo n. xxxxx</Heading>
          <Text fontSize="sm" mb="1rem">Distribuído em DATA</Text>
          <TabelaProcesso />
        </Flex>
      </Flex>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaBusca />,
  },
  {
    path: "/processo",
    element: <PaginaProcesso />,
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
