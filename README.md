💻 My Portfolio Website
This is a full-stack personal portfolio application built with Node.js, Express, and MongoDB (MERN/MEEN stack variant). It serves as a showcase for my skills, biography, and projects, featuring a basic CRUD (Create, Read, Update, Delete) interface for managing the project entries.

✨ Features
RESTful Routing: Dedicated routes for all core portfolio sections (/home, /about, /skills, /contact).

Project Management (CRUD): Full CRUD functionality to manage the showcased projects, allowing easy creation, viewing, editing, and deletion of project entries.

MongoDB Integration: Uses Mongoose to connect to a MongoDB database for dynamic content (projects and potentially other sections).

EJS Templating: Utilizes EJS (Embedded JavaScript) and the ejs-mate layout engine for efficient and structured HTML rendering.

Method Override: Uses method-override to enable PUT (for update) and DELETE requests from standard HTML forms.

🚀 Technologies Used
Backend Runtime: Node.js

Web Framework: Express.js

Database: MongoDB

ODM: Mongoose

Templating: EJS (with ejs-mate for layouts)

Middleware: method-override for CRUD operations

Routing: Express Router structure (as seen in app.js)

⚙️ Installation and Setup
Follow these steps to get a local copy of the project running on your machine.

Prerequisites
You must have the following software installed:

Node.js: (LTS recommended)

MongoDB: A running local instance or a cloud MongoDB URI.

Steps
Clone the repository:

Bash

git clone [Your Repository URL Here]
cd My-porfolio
Install dependencies:

Bash

npm install express mongoose ejs ejs-mate method-override path
# OR, if you have a package.json file:
# npm install
Configure MongoDB:
The application is currently configured to connect to a local MongoDB instance on port 27017 with the database name Portfolio.

JavaScript

const MONGO_URL = "mongodb://127.0.0.1:27017/Portfolio";
Ensure your MongoDB server is running.

Run the application:

Bash

node app.js
The console should display:

connected to mongo
Server is running on port 8080
Access the application:
Open your web browser and navigate to: http://localhost:8080

📋 Project Endpoints (Routes)
Method	Path	Description
GET	/	Home page and primary entry point.
GET	/home	Alias for the home page.
GET	/about	Renders the 'About Me' page.
GET	/skills	Renders the 'Skills' page.
GET	/contact	Renders the 'Contact' page.
GET	/projects	INDEX - Shows a list of all projects.
GET	/projects/new	NEW - Renders the form to create a new project.
POST	/projects	CREATE - Creates a new project in the database.
GET	/project/:id	SHOW - Displays details for a specific project.
GET	/project/:id/edit	EDIT - Renders the form to edit a project.
PUT	/project/:id	UPDATE - Updates the specified project in the database.
DELETE	/project/:id	DELETE - Removes the specified project from the database.
📂 File Structure Overview
.
├── models/
│   ├── listing.js        # Mongoose Schema (likely for static content/listings)
│   └── listingPro.js     # Mongoose Schema (for Project CRUD)
├── node_modules/         # (Dependencies)
├── public/               # Static assets (CSS, JS, images, etc.)
├── views/
│   ├── layouts/          # EJS-mate layout template
│   └── portfolio/        # EJS partials for different pages
│       ├── index.ejs     # Home page
│       ├── about.ejs     # About page
│       ├── skill.ejs     # Skills page
│       ├── Contact.ejs   # Contact page
│       ├── project.ejs   # Project Index page
│       ├── new.ejs       # Project Create form
│       ├── show.ejs      # Project Show page
│       └── edit.ejs      # Project Edit form
└── app.js                # Main server file (Express setup and routes)
