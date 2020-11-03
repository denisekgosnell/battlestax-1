import { generateGameId } from "../util/random";
import reducer, { initialState, setId, selectId } from "./gameSlice";

describe("game slice", () => {
  it("should return the initial state on first run", () => {
    const nextState = initialState;
    const result = reducer(undefined, {});
    expect(result).toEqual(nextState);
  });

  it("should set a game id", () => {
    const gameId = generateGameId();
    const nextState = reducer(initialState, setId(gameId));
    const rootState = { game: nextState };
    expect(selectId(rootState)).toEqual(gameId);
  });
});
