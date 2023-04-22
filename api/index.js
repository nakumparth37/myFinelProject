const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users")

dotenv.config();

mongoose.connect(process.env.Mongo_Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("DB is Connected Successful!")).catch(error => console.log(error));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(8080, () => {
    console.log("Backend is running")
})