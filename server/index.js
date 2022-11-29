const express = require("express");
const cors = require("cors");

const {
  getHouses,
  deleteHouse,
  createHouse,
  updateHouse,
} = require("./controller");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/houses", getHouses),
  app.post("/api/houses", createHouse),
  app.delete("/api/houses/:id", deleteHouse),
  app.put("/api/houses/:id", updateHouse);

app.listen(4004, () => console.log("Listening on port 4004......"));
