const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Router = require("./routes");

const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 8000;

const hostname = "127.0.0.1";

const password = "Ksandeep%4020";

const uri = `mongodb+srv://sandeep:${password}@cluster0.lhwtm9t.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(port, hostname, () => {
  console.log(`server is runnnig at ${hostname}:${port}`);
});
