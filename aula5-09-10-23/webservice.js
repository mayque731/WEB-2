const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.static("public"));

app.get("characters", async (req, res) => {
  try {
    const res = await axios.get("https://swapi.dev/api/people");
    res.json(res.data);
  } catch (error) {
    res.status(500).send("erro ao buscar");
  }
});

app.listen(3000, () => {
  console.log("server up on port 3000");
});
