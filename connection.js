const mongoose = require("mongoose");
const DATABASE_URL =
  "mongodb+srv://subbulakshmi:Sksk@1996@cluster0.3thcfbt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  mongoose.connect(DATABASE_URL);
  const database = mongoose.connection;

  database.on("error", (error) => {
    console.log(error);
  });

  database.once("connected", () => {
    console.log("Database Connected");
  });
}
