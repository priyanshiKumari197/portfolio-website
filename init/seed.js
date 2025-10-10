const mongoose = require("mongoose");
const initdata = require("./data.js"); // isme listings ka data hai
const Listing = require("../models/listing.js");

const { Project, sampleProjects } = require("../models/listingPro.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/Portfolio";

main()
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.log("❌ Connection error:", err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    // Listings ke liye
    await Listing.deleteMany({});
    await Listing.insertMany(initdata.data);
    console.log("🌱 Listings seeded!");

    // Projects ke liye
    await Project.deleteMany({});
    await Project.insertMany(sampleProjects);
    console.log("🌱 Projects seeded!");
  } catch (err) {
    console.log("❌ Error while seeding:", err);
  } finally {
    mongoose.connection.close();
  }
};

initDB();
