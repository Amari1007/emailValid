import express from "express";
import path from "path";

const server = express();
server.use(express.static("public"))
const PORT = 7341;

server.set("view engine", "ejs");
server.set("views", "views")

server.get("/home", (req, res) => {
    res.status(200).render("home");
});

//******************DELETE IN PRODUCTION************ */
server.listen(PORT, () => {
    console.log(`email valid started on port ${PORT}`);
})
