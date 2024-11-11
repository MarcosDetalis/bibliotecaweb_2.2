import { ThemeProvider } from "styled-components";
import GlobalStyles from "../componentes_con_estilos/GlobalStyles";
import theme from "../theme";
// Se agregar los estilo para los componentes.

function ThemeContext({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default ThemeContext;
