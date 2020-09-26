const express = require("express");
const app = express();

app.set("view engine", "pug");
const PORT = process.env.PORT || 5000;

// routes
app.use("/", require("./routes/index"));

app.listen(PORT, console.log(`Server started on port ${PORT}`));
