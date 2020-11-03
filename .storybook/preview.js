import React from "react";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MemoryRouter } from "react-router-dom";
import { theme } from "../src/theme";
import store from "../src/store";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <MemoryRouter>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </MuiThemeProvider>
      </MemoryRouter>
    </Provider>
  ),
];
