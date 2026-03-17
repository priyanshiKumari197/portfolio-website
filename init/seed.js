import mongoose from "mongoose";
import dotenv from "dotenv";
import portfolioData from "./data.js";
import Listing from "../models/listing.js";
import { Project, sampleProjects } from "../models/listingPro.js";

dotenv.config({ path: "../.env" });

const MONGO_URL = process.env.MONGO_URI;

async function runSeeder() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ Connected to MongoDB");

    await Listing.deleteMany({});
    await Listing.insertMany([portfolioData]);
    console.log("🌱 Portfolio data seeded!");

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