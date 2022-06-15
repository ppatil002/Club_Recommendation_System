require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
// Connect to mongodb
const URI = process.env.MONGODB_URL;
mongoose.connect(
    "mongodb+srv://prerna_pratik:28_30@cluster0.retf1.mongodb.net/Club_Recommendation?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) console.log(err);
        console.log("Connected to MongoDB");
    }
);

app.get("/", (req, res) => {
    res.send("This is Club Recommendation System app");
});
const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log("Server is running on port", port);
});