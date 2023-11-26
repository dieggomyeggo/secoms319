const { MongoClient } = require("mongodb");

// Mongo
const url = "mongodb://127.0.0.1:27017";
const dbName = "Final";
const client = new MongoClient(url);
const db = client.db(dbName);

var express = require("express");
var cors = require("cors");
var ObjectId = require("mongodb").ObjectId;
// var fs = require("fs");
var bodyParser = require("body-parser");

var app = express();
app.use(cors());
app.use(bodyParser.json());

const port = "8081";
const host = "localhost";

// USERS
app.post("/createUser", async (req, res) => {
  let collection = await db.collection("users");
  await client.connect();
  let newUser = req.body;
  let result = await collection.insertOne(newUser);
  res.send(result).status(204);
});

app.put("/updateUser/:email", async (req, res) => {
  let collection = await db.collection("users");
  await client.connect();
  const query = {
    email: req.params.email,
  };

  const newUser = {
    $set: req.body,
  };
  let result = collection.updateOne(query, newUser, null);
  // db.users.updateOne({email:"123"}, {$set: {"password": "diego"}})
  res.send(result).status(200);
});

app.get("/getUsers", async (_, res) => {
  await client.connect();
  console.log("Node connected successfully to GET MongoDB");
  const query = {};
  const results = await db.collection("users").find(query).limit(100).toArray();
  console.log(results);
  res.status(200);
  res.send(results);
});

/*
 * Users should be created with the following JSON format:
 *   {
 *     email: ...,
 *     password: ...,
 *     workouts: [],
 *   }
 *
 *   email and password are both strings, while the workouts array will hold strings which are the ids of the workout.
 *   These ids can be extracted when the workout is created, then added to this array.
 *
 *
 *
 *
 */
app.get("/getUser", async (req, res) => {
  await client.connect();
  console.log("node connected successfully to get mongodb");
  const query = req.body;
  const results = await db.collection("users").findOne(query);
  console.log("results: ", results);
  if (!results) res.send("not found").status(404);
  else res.send(results).status(200);
});

app.delete("/deleteUser", async (req, res) => {
  const collection = db.collection("users");
  let result = await collection.deleteOne(req.body);
  res.send(result).status(200);
});

//WORKOUTS
app.get("/getWorkouts", async (_, res) => {
  await client.connect();
  console.log("Node connected successfully to GET MongoDB");
  const query = {};
  const results = await db
    .collection("workouts")
    .find(query)
    .limit(100)
    .toArray();
  res.status(200);
  res.send(results);
});

app.post("/createWorkout", async (req, res) => {
  let collection = await db.collection("workouts");
  await client.connect();
  let newWorkout = req.body;
  let result = await collection.insertOne(newWorkout);
  res.send(result).status(204);
});

app.get("/getWorkouts/:id", async (req, res) => {
  const workoutsId = req.params.id;
  console.log("Workout to find :", workoutsId);
  await client.connect();
  console.log("Node connected successfully to GET-id MongoDB");
  const o_id = new ObjectId(workoutsId);
  const query = { _id: o_id };
  console.log("HERE IS THE QUERY", query);
  const results = await db.collection("workouts").findOne(query);
  console.log("Results :", results);
  if (!results) res.send("Not Found").status(404);
  else res.send(results).status(200);
});

app.listen(port, () => {
  console.log("App listening at http://%s:%s", host, port);
});
