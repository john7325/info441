import express from 'express';
import { promises as fs } from 'fs'; 
var router = express.Router();

/* GET users listing. */
router.get('/getPterosaurs', async (req, res, next) => {
    const data = await fs.readFile("data/pterosaur.json"); 
    let pterosaurInfo = JSON.parse(data); 

    let filterPterosaurInfo = pterosaurInfo.filter(onePterosaur => { 
        return onePterosaur.img != ""; 
    })

    res.json(filterPterosaurInfo); 
});

export default router;
