import {
  Input,
  Button,
  Heading,
  Text,
  Flex,
  Select
} from '@chakra-ui/react'

import { Formik, Form, Field } from "formik"
import { useNavigate } from "react-router-dom";

export function Busca() {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ tribunal: "", processo: "" }}
      onSubmit={(values) => {
        if (values.tribunal.length > 0) {
          navigate(`/processos/tribunal/${values.tribunal}`);
        } else if (values.processo.length > 0) {
          navigate(`/processos/${values.processo}`);
        }
      }}
    >
      {() => (
        <Form>
          <Flex align="center" direction="row" w="40rem" justifyContent="space-between">
            <Field name="tribunal">
              {({ field }) => (
                <Select
                  {...field}
                  placeholder='Selecione o tribunal'
                  w="16rem"
                >
                  <option value="Tribunal 1">Tribunal 1</option>
                  <option value="Tribunal 2">Tribunal 2</option>
                  <option value="Tribunal 3">Tribunal 3</option>
                </Select>
              )}
            </Field>
            <Field name="processo">
              {({ field }) => (
                <Input
                  {...field}
                  placeholder='Número do processo'
                  w="16rem"
                />
              )}
            </Field>
            <Button
              type="submit"
              colorScheme="blue"
            >
              BUSCAR
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  )
}

export function PaginaBusca() {
  return (
    <Flex align="center" justify="center" h="100vh">
      <Flex align="center" direction="column">
        <Heading as="h4" size="lg">
          Buscar
        </Heading>
        <Text fontSize="md" mt="0.5rem" mb="1rem">
          Selecione o tribunal para listar os processos ou buscar pelo número unificado
        </Text>
        <Busca />
      </Flex>
    </Flex>
  )
}