import "../styles/globals.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Children } from "react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
