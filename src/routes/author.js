import express from "express";
import { createAuthor, getAuthor, login } from "../controllers/authorController.js";

const router = express.Router();
//test router----
router.get('/test', function (req, res) {
    res.send('hello world')
})


//CreateAuthor router  ---------------------------------------------------
router.post('/authors', createAuthor);
router.get('/blogsr', getAuthor); //it's not required in qustion


//login user----
router.post('/login', login)


export default router;