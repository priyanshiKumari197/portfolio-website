import mongoose from "mongoose";
import { data as initdata } from "./data.js"; 
import Listing from "../models/listing.js";
import { Project, sampleProjects } from "../models/listingPro.js";

const MONGO_URL = "mongodb://127.0.0.1:27017/Portfolio";

async function runSeeder() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ Connected to MongoDB");

    await Listing.deleteMany({});
    await Listing.insertMany(initdata);
    console.log("🌱 Listings seeded!");

    await Project.deleteMany({});
    await Project.insertMany(sampleProjects);
    console.log("🌱 Projects seeded!");

  } catch (err) {
    console.log("❌ Error:", err);
  } finally {
    mongoose.connection.close();
    console.log("🔌 Connection closed.");
  }
}

runSeeder();