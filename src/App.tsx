import { Button, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { Login } from "./components/pages/Login";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
      <Login />
    </ChakraProvider>
  );
}
