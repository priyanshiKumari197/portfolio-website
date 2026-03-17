# 💻 My Portfolio Website

This is a personal portfolio application built using **Node.js**, **Express.js**, and **MongoDB**. It showcases my skills and projects, featuring full **CRUD (Create, Read, Update, Delete)** functionality for managing project entries.

## ✨ Features

* **Full CRUD** for Project Management (`/projects` routes).
* **Express & Mongoose** integration for dynamic content served from MongoDB.
* **EJS Templating** with `ejs-mate` for efficient front-end structure.
* **RESTful Routing** for all core pages (`/home`, `/about`, `/skills`, etc.).

## 🚀 Technologies

* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **ODM:** Mongoose
* **Templating:** EJS, ejs-mate
* **Middleware:** method-override

## ⚙️ Setup and Run

### Prerequisites

* Node.js (LTS)
* MongoDB (Local instance running)

### Installation Steps

1.  **Clone the Repository:**
    ```bash
    git clone [Your Repository URL Here]
    cd [Your Project Folder]
    ```

2.  **Install Dependencies:**
    ```bash
    npm install express mongoose ejs ejs-mate method-override path
    ```
    *(Note: Assuming you don't have a `package.json`, otherwise use `npm install`)*

3.  **Database Connection:**
    The connection URI is configured in `app.js`:
    ```javascript
    const MONGO_URL = "mongodb://127.0.0.1:27017/Portfolio";
    ```
    Ensure your MongoDB server is running.

4.  **Start the Server:**
    ```bash
    node app.js
    ```

5.  **Access:**
    Open your browser to: `http://localhost:8080`

## 🔗 Key Endpoints (Project CRUD)

| Method | Path | Functionality |
| :--- | :--- | :--- |
| `GET` | `/projects` | View all projects (Index). |
| `GET` | `/projects/new` | Form to create a new project (New). |
| `POST` | `/projects` | Create a new project (Create). |
| `GET` | `/project/:id` | View a specific project (Show). |
| `PUT` | `/project/:id` | Update a specific project (Update). |
| `DELETE` | `/project/:id` | Delete a specific project (Delete). |
