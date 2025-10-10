const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    skills: [String], // simple array of strings

    projects: [
        {
            title: { type: String, required: true },
            description: String,
            techStack: [String],
            link: String,
        },
    ],

    experience: [
        {
            company: String,
            role: String,
            duration: String,
            details: String,
        },
    ],

    education: [
        {
            degree: String,
            college: String,
            year: String,
        },
    ],

    contact: [
        {
            type: { type: String }, // email / phone / linkedin / github
            value: String,
        },
    ],
})

const listing = mongoose.model("Portfolio",portfolioSchema)
module.exports = listing;