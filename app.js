import express from "express";
const app = express();
import path from "path";
import { fileURLToPath } from "url"; // __dirname fix ke liye
import mongoose from "mongoose";
import ejsMate from "ejs-mate";
import methodOverride from "method-override";

import Listing from "./models/listing.js";
import { Project } from "./models/listingPro.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MONGO_URL = "mongodb://127.0.0.1:27017/Portfolio";

async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.log("❌ Connection error:", err);
  });

// App config
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// --- Routes ---

// Home/Index
app.get("/", async (req, res) => {
  const listingsOfData = await Listing.find({});
  res.render("portfolio/index.ejs", { listingsOfData });
});

app.get("/home", async (req, res) => {
  const listingsOfData = await Listing.find({});
  res.render("portfolio/index.ejs", { listingsOfData });
});

app.get("/about", async (req, res) => {
    const listingsOfData = await Listing.find({});
    res.render("portfolio/about.ejs", { listingsOfData }); 
});

app.get("/skills", async (req, res) => {
    const listingsOfData = await Listing.find({}); 
    res.render("portfolio/skill.ejs", { listingsOfData}); 
});

app.get("/Contact", async (req, res) => {
  const listingsOfData = await Listing.find({}); 
  res.render("portfolio/Contact.ejs", { listingsOfData }); 
});

// --- Projects CRUD ---

app.get("/projects", async (req, res) => {
  const projectData = await Project.find({});
  res.render("portfolio/project.ejs", { projectData });
});

app.get("/projects/new", (req, res) => {
  res.render("portfolio/new.ejs");
});

app.post("/projects", async (req, res) => {
  const newProject = new Project(req.body.listing);
  await newProject.save();
  res.redirect("/projects");
});

app.get("/project/:id", async (req, res) => {
  let { id } = req.params;
  const projectData = await Project.findById(id);
  res.render("portfolio/show.ejs", { projectData });
});

app.get("/project/:id/edit", async (req, res) => {
  let { id } = req.params;
  const projectData = await Project.findById(id);
  res.render("portfolio/edit.ejs", { projectData });
});

app.put("/project/:id", async (req, res) => {
  let { id } = req.params;
  await Project.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect("/projects");
});

app.delete("/project/:id", async (req, res) => {
  let { id } = req.params;
  await Project.findByIdAndDelete(id);
  res.redirect("/projects");
});

app.listen(8080, () => {
  console.log("🚀 Server is running on port 8080");
});