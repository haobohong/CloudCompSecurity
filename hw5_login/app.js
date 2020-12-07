const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user-routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/user", userRoutes);

mongoose
    .connect(
        "mongodb+srv://test:5566terry@cluster0.ig5ss.mongodb.net/user?retryWrites=true&w=majority"
    )
    .then(() => {
        app.listen(5000);
        console.log("connect success");
    })
    .catch((err) => {
        console.log(err);
    });
