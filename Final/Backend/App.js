// Author: Diego Perez
//   ISU Netid : joceo@iastate.edu
//   Date :  November 13, 2023
const { MongoClient } = require("mongodb");

// Mongo
const url = "mongodb://127.0.0.1:27017";
const dbName = "reactdata";
const client = new MongoClient(url);
const db = client.db(dbName);

var express = require("express");
var cors = require("cors");
var fs = require("fs");
var bodyParser = require("body-parser");

var app = express();
app.use(cors());
app.use(bodyParser.json());

const port = "8081";
const host = "localhost";

app.post("/createUser", async (req, res) => {
  let collection = await db.collection("users");
  await client.connect9;
  let newUser = req.body;
  let result = await collection.insertOne(newUser);
  res.send(result).status(204);
});

app.get("/getUsers", async (req, res) => {
  await client.connect();
  console.log("node connected successfully to get mongodb");
  const query = {};
  const results = await db
    .collection("users")
    .find(query)
    .toArray();
  console.log(results);
  res.status(200);
  res.send(results);
});

app.get("/getuser", async (req, res) => {
  await client.connect();
  console.log("node connected successfully to get mongodb");
  const e = req.params.email;
  const pass = req.params.password;
  const query = { email: e, password: pass };
  const results = await db.collection("robots").findone(query);
  console.log("results: ", results);
  if (!results) res.send("not found").status(404);
  else res.send(results.status(200));
});
// app.get("/listRobots", async (req, res) => {
//   await client.connect();
//   console.log("node connected successfully to get mongodb");
//   const query = {};
//   const results = await db
//     .collection("robots")
//     .find(query)
//     .limit(100)
//     .toarray();
//   console.log(results);
//   res.status(200);
//   res.send(results);
// });

// app.get("/:id", async (req, res) => {
//   const robotid = Number(req.params.id);
//   console.log("Robot to find :", robotid);
//   await client.connect();
//   console.log("Node connected successfully to GET-id MongoDB");
//   const query = { "id": robotid };
//   const results = await db.collection("robots")
//     .findOne(query);
//   console.log("Results :", results);
//   if (!results) res.send("Not Found").status(404);
//   else res.send(results).status(200);
// });

// app.post("/addRobot", async (req, res) => {
//   let collection = await db.collection("robots")
//   console.log("Robot to post: ", req.body);
//   await client.connect();
//   console.log("Node connected succesfull to POST-id MongoDB");
//   let newRobot = req.body;
//   let result = await collection.insertOne(newRobot);
//   res.send(result).status(204);

// });
// app.delete("/deleteRobot", async (req, res) => {
//   const collection = db.collection("robots")
//   let result = await collection.deleteOne(req.body)
//   res.send(result).status(200);
// })

app.listen(port, () => {
  console.log("App listening at http://%s:%s", host, port);
});
