import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  techStack: [String], // ✅ FIXED (array)
  link: String,
});

const Project = mongoose.model("Project", projectSchema);

const sampleProjects = [
  {
    title: "WonderLust",
    description: "Travel booking platform like Airbnb",
    techStack: ["Node.js", "Express.js", "MongoDB", "EJS"],
    link: "https://wonderlust-app-1.onrender.com/signup",
  },
  {
    title: "Real-Time Chat App",
    description: "Chat app using Socket.io",
    techStack: ["Node.js", "Socket.io", "MongoDB"],
    link: "https://github.com/username/chat-app",
  },
  {
    title: "Calculator App",
    description: "Simple calculator app",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://priyanshikumari197.github.io/Calculator/",
  },
  {
    title: "Simon Game",
    description: "Memory-based game",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://priyanshikumari197.github.io/Simon-game/",
  },
  {
    title: "Spotify Clone",
    description: "Frontend Spotify UI clone",
    techStack: ["React.js", "CSS"],
    link: "https://github.com/priyanshikumari197/spotify_clone",
  },
  {
    title: "To-Do List App",
    description: "Task manager app",
    techStack: ["Node.js", "Express.js", "MongoDB"],
    link: "https://priyanshikumari197.github.io/To-Do-List/",
  },
];

export { Project, sampleProjects };