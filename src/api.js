const netlifyPath = "/.netlify/functions";

export const createGame = async (gameId) => {
  const res = await fetch(`${netlifyPath}/insertGame/${gameId}`, {
    method: "POST",
    body: JSON.stringify({ state: "initialized" }),
  });
  return await res.json();
};
