import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../store";

test("renders the title", () => {
  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );
  const titleElement = getByText(/BattleStax/i);
  expect(titleElement).toBeInTheDocument();
});
