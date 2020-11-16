# 02. Connect to your Astra database

[![License Apache2](https://img.shields.io/hexpm/l/plug.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![Discord](https://img.shields.io/discord/685554030159593522)](https://discord.com/widget?id=685554030159593522&theme=dark)
[![Actions Status](https://github.com/DataStax-Academy/battlestax/workflows/BattleStax%20Tests/badge.svg)](https://github.com/DataStax-Academy/battlestax/actions) 
[![Netlify Status](https://api.netlify.com/api/v1/badges/e265340f-c6a6-4d7b-b24c-438b87c67876/deploy-status)](https://app.netlify.com/sites/battlestax-tutorial/deploys)

[🏠 Back to [Table of Contents](./README.md#table-of-contents)]

* [Part1 - [Setup environment and tools](./README_step00.md)]
* [Part2 - [Create a REST API with netlify](./README_step01.md)]

## 1. Creating the `insertGame` endpoint

See the complete code solution [here](https://github.com/beccam/battlestax-tutorial/blob/step-2-solution/functions/insertGame.js)

1. We will need to get a game id from someone, and also a payload we need from the user
```javascript
let gameId;
let gamePayload;
```

In Netlify, you get your parameter from the path, and parse our event body

```javascript
gameId = event.path.split("insertGame/")[1];
gamePayload = JSON.parse(event.body);
```
    
Validation step: If we dont get it, a 400 will be returned and you will get an error message

```javascript
...
} catch (e) {
    return { 
      statusCode: 400,
      body: JSON.stringify({ message: "must provide a valid game ID" }),
    };
  }
```

All this should statisfy our second test ( we need to get valid game id)


2. Then we are going to connect to Astra, we are going to give the Astra client our environmental variable credentials so that you can connect to Astra.
We are importing our Astra client and connecting it to Astra

``` javascript
  const astraClient = await astra.createClient({
    baseUrl: `https://${process.env.ASTRA_DB_ID}-${process.env.ASTRA_DB_REGION}.apps.astra.datastax.com`,
    username: process.env.ASTRA_DB_USERNAME,
    password: process.env.ASTRA_DB_PASSWORD,
  });
  const namespace = process.env.ASTRA_DB_KEYSPACE;
  const collection = process.env.GAMES_COLLECTION;
```

3. Then we are going to try to take that input and create a game from it with our client. If it works, we get back a `200`. If it fails, we will get back a `500`. This should statify both test 1 and test 2.

```javascript
try {
    const res = await astraClient.put(
      `/namespaces/${namespace}/collections/${collection}/${gameId}`,
      gamePayload
    );
    return {
      statusCode: 200,
      body: JSON.stringify(res.jsonResponse),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
```
See the complete code solution [here](https://github.com/beccam/battlestax-tutorial/blob/step-2-solution/functions/insertGame.js)

Now all of our tests should pass. Let's run our tests once again:
`npm run tests: functions`
|

**Click** below to move to the next section.

[Go to Create Client state](./README_step03.md)

