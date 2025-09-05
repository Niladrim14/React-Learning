const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("Middleware executed");
    next();
});


app.get("/", (req, res) => {
    res.send("Hello World i m oggy here how are you");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});