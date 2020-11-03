const { createClient } = require("@astrajs/collections");

exports.handler = async (event, context) => {
  let gameId;
  let gamePayload;
  try {
    gameId = event.path.split("insertGame/")[1];
    gamePayload = JSON.parse(event.body);
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "must provide a valid game ID" }),
    };
  }

  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    username: process.env.ASTRA_DB_USERNAME,
    password: process.env.ASTRA_DB_PASSWORD,
  });

  const gamesCollection = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(process.env.GAMES_COLLECTION);

  try {
    const res = await gamesCollection.create(gameId, gamePayload);
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
