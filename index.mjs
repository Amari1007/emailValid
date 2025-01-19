import express from "express";
import emailValidator from 'node-email-verifier';
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

server.post("/api/validate_once", async (req, res) => {
    const email = req.body.email;
    const validate = await validateEmailWithMx(email.toString());
    res.status(200).json({data: validate});
});

//******************DELETE IN PRODUCTION************ */
server.listen(PORT, () => {
    console.log(`email valid started on port ${PORT}`);
});

async function validateEmailWithMx(email) {
    try {
        const isValid = await emailValidator(email, {checkMx:true});
        console.log(isValid);
        return {decision: isValid};
    } catch (error) {
        if(error.message.match(/timed out/)){
            return {decision: false, message: "Timeout on lookup"};
        }else{
            return {decision: false, message: "Error validating email"};
        }
    }
}
