const express = require("express");
const soilModel = require("./models");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/static/form.html");
});

app.post("/add_soil_data", async (req, res) => {
  const soil = new soilModel(req.body);

  try {
    await soil.save();
    res.send(soil);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/soil_data", async (req, res) => {
  const soil = await soilModel.find({});

  try {
    res.send(soil);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
