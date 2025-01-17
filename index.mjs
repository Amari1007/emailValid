import express from "express";
import path from "path";

const server = express();
const PORT = 7341;

server.use(express.json());
server.use(express.static("public"))
server.set("view engine", "ejs");
server.set("views", "views")

server.get("/home", (req, res) => {
    res.status(200).render("home");
});

server.post("/api/validate_once", (req, res) => {
    //res.json({status:true}).status(200);
    console.log(req.body);
    res.status(200).json({name:"Ghambi"});
});

//******************DELETE IN PRODUCTION************ */
server.listen(PORT, () => {
    console.log(`email valid started on port ${PORT}`);
})
