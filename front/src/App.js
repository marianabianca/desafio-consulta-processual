import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { PaginaBusca } from "./pages/PaginaBusca"
import { PaginaListaProcessos } from "./pages/PaginaListaProcessos"
import { PaginaProcesso } from "./pages/PaginaProcesso"

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaBusca />,
  },
  {
    path: "/processos/tribunal/:id",
    element: <PaginaListaProcessos />,
  },
  {
    path: "/processos/:cnj",
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
