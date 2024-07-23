const express = require("express");
const mongoose = require("mongoose");
const DATABASE_URL =
  "mongodb+srv://subbulakshmi:5ixShBpskVrGpDR5@cluster0.3thcfbt.mongodb.net/sample?retryWrites=true&w=majority&appName=Cluster0";
/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
