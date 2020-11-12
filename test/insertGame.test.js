const insertGame = require("./insertGame");
const faker = require("faker");

const gameId = faker.helpers.replaceSymbols("????");

it("should create a game document", async () => {
  const response = await insertGame.handler({
    path: "/functions/insertGame/" + gameId,
    body: '{"user":"me"}',
  });
  expect(response.statusCode).toBe(200);
});

it("shouldn't create a game document without a game id", async () => {
  const response = await insertGame.handler({ path: "insertGame" });
  expect(response.statusCode).toBe(400);
});
