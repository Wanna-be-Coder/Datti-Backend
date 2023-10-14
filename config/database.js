const { MongoClient, ServerApiVersion } = require("mongodb");
const { MONGODB_URI } = require("./environmentVariables");

const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToDatabase() {
  try {
    await client.connect();
    return client;
  } catch (error) {
    console.error("Failed to connect to MongoDB Atlas:", error);
    throw error;
  }
}

module.exports = connectToDatabase;
