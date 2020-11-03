import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Press Start 2P"', "sans-serif"].join(","),
  },
  palette: {
    type: "dark",
  },
});
