import PropTypes from "prop-types";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

declare module "@mui/material/styles" {
  interface TypeBackground {
    footer?: string;
    transparent?: string;
  }
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#07D044",
        light: "#5F98FF",
        dark: "#0A50CE",
      },
      background: {
        default: "#000000",
        footer: "#383039",
        transparent: "transparent",
      },
      text: {
        primary: "#ffffff",
        secondary: "#B3B3B3"
      }
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
