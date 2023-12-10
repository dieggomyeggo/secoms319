// Author: Diego Perez
//   ISU Netid : joceo@iastate.edu
//   Date :  November 13, 2023
const { MongoClient } = require("mongodb");

// Mongo
const url = "mongodb://127.0.0.1:27017";
const dbName = "reactdata";
const client = new MongoClient(url);
const db = client.db(dbName);
const collection = db.collection("fakestore_catalog");

var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

var app = express();
app.use(cors());
app.use(bodyParser.json());
const port = "8081";
const host = "localhost";

app.get("/listProducts", async (req, res) => {
  await client.connect();
  console.log("Node connected successfully to GET MongoDB");
  const query = {};
  const results = await collection.find(query).limit(100).toArray();
  console.log(results);
  res.status(200);
  res.send(results);
});

app.get("/listProduct/:id", async (req, res) => {
  const product_id = Number(req.params.id);
  console.log("Product to find :", product_id);
  await client.connect();
  console.log("Node connected successfully to GET-id MongoDB");
  const query = { id: product_id };
  const results = await collection.findOne(query);
  console.log("Results :", results);
  if (!results) res.send("Not Found").status(404);
  else res.send(results).status(200);
});

app.post("/addProduct", async (req, res) => {
  console.log("Product to post: ", req.body);
  await client.connect();
  console.log("Node connected succesfull to POST-id MongoDB");
  let newProduct = req.body;
  let result = await collection.insertOne(newProduct);
  res.send(result).status(204);
});

app.delete("/deleteProduct/", async (req, res) => {
  let result = await collection.deleteOne(req.body);
  res.send(result).status(200);
});

app.listen(port, () => {
  console.log("App listening at http://%s:%s", host, port);
});
