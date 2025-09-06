const path = require("path");
const express = require("express");
const app = express();
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    fs.readdir('./files', (err, files) => {
        res.render("index",{ files: files });
    });
});
app.post("/create", (req, res) => {
    fs.writeFile(`./files/${req.body.title.split(" ").join("")}.txt`,req.body.detail,(err)=>{
   res.redirect("/");
    });
    
});


app.get("/file/:filename", (req, res) => {
    
    fs.readFile(`./files/${req.params.filename}`,'utf8', (err, data) => {
        if (err) {
            return res.status(404).send("File not found");
        }
        res.send(`<h1>${req.params.filename}</h1><pre>${data}</pre>`);
    });
});

app.listen(3000);
console.log("Server is running on http://localhost:3000");
