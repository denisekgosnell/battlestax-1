import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import NewGame from "./NewGame";
import store from "../../../store";

test("renders without crashing", () => {
  render(
    <Provider store={store}>
      <NewGame />
    </Provider>
  );
});
