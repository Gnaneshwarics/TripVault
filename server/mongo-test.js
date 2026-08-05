const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://csgnaneshwari_db_user:Gnana123@cluster0.efbgh8p.mongodb.net/tripvault?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected Successfully");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();