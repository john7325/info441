import express from 'express';
import { promises as fs } from 'fs'; 
import usersRouter from './users.js';

var router = express.Router();

router.use("/users", usersRouter); 

export default router;
