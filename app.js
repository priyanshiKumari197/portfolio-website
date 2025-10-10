const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");

const Listing = require("./models/listing.js");
const { Project } = require("./models/listingPro.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/Portfolio";

main()
  .then(() => {
    console.log("connected to mongo");
  })
  .catch((err) => {
    console.log("❌ Connection error:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

// App config
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Route
app.get("/", async (req, res) => {
  const listingsOfData = await Listing.find({});
  res.render("portfolio/index.ejs", { listingsOfData });
});

// Home
app.get("/home", async (req, res) => {
  const listingsOfData = await Listing.find({});
  res.render("portfolio/index.ejs", { listingsOfData });
});
// About
app.get("/about", async (req, res) => {
  const listingsOfData = await Listing.find({});
  res.render("portfolio/about.ejs", { listingsOfData });
});
// skills
app.get("/skills", async (req, res) => {
  const listingsOfData = await Listing.find({});
  res.render("portfolio/skill.ejs", { listingsOfData });
});
// Contact
app.get("/Contact", async (req, res) => {
  const listingsOfData = await Listing.find({});
  res.render("portfolio/Contact.ejs", { listingsOfData });
});
// crud for project
app.get("/projects", async (req, res) => {
  const projectData = await Project.find({});
  res.render("portfolio/project.ejs", { projectData });
});
// new Route
app.get("/projects/new", (req, res) => {
  res.render("portfolio/new.ejs");
});
// create Route
app.post("/projects", async (req, res) => {
  const newProject = new Project(req.body.listing);
  await newProject.save();
  res.redirect("/projects");
});
// show Route
app.get("/project/:id", async (req, res) => {
  let { id } = req.params;
  const projectData = await Project.findById(id);
  res.render("portfolio/show.ejs", { projectData });
});
// edit Route
app.get("/project/:id/edit", async (req, res) => {
  let { id } = req.params;
  const projectData = await Project.findById(id);
  res.render("portfolio/edit.ejs", { projectData });
});

// Edited-->
app.put("/project/:id", async (req, res) => {
  let { id } = req.params;
  await Project.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect("/projects");
});

// Delete Route
app.delete("/project/:id", async (req, res) => {
  let { id } = req.params;
  let deleted = await Project.findByIdAndDelete(id);
  res.redirect("/projects");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
