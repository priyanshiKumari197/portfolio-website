import express from "express";
const app = express();
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import ejsMate from "ejs-mate";
import methodOverride from "method-override";
import Listing from "./models/listing.js";
import { Project } from "./models/listingPro.js";
import dotenv from "dotenv";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MONGO_URI = process.env.MONGO_URI;

async function main() {
  await mongoose.connect(MONGO_URI);
}

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Connection error:", err);
  });

app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


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
  res.render("portfolio/skill.ejs", { listingsOfData });
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

// 🔥 PORT FIX (IMPORTANT)
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});