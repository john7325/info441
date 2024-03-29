import { promises as fs } from "fs"; 
import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  let userInfo = await fs.readFile("data/userData.json"); 
  res.type("json"); 
  res.send(userInfo); 
});

router.post("/", async (req, res) => { 
  await fs.writeFile("data/userData.json", JSON.stringify(req.body));
  res.send("success"); 
});

export default router;
