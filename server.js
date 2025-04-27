const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(bodyParser.json()); // To parse JSON bodies
app.use(express.static("public")); // Serve static files from the 'public' folder

// Route to handle form submissions
app.post("/submit", (req, res) => {
    const { location, waterQuality, image } = req.body;

    // Prepare the data to be written into a file
    const guestData = `Location: ${location}\nWater Quality: ${waterQuality}\nImage Path: ${image}\n\n`;

    // Write the data to a text file (could also use a database here)
    fs.appendFile("admin_data.txt", guestData, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            return res.status(500).send("Internal server error.");
        }
        res.status(200).json({ message: "Data submitted successfully." });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
