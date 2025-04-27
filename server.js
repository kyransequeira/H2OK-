const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(bodyParser.json()); // To parse JSON bodies
app.use(express.static("public")); // Serve static files from the 'public' folder

// Store guest data in memory for now (in production, you'd use a database)
let guestDataStore = [];

// Route to handle guest submissions
app.post("/submit", (req, res) => {
    const { location, waterQuality, image } = req.body;

    // Save guest data in memory (could be a file or database in a real app)
    guestDataStore.push({ location, waterQuality, image });

    res.status(200).json({ message: "Data submitted successfully." });
});

// Route to handle fetching data for the admin
app.get("/admin/data", (req, res) => {
    res.json(guestDataStore); // Return the guest data for the admin to view
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
