import express from 'express';

import menusDessertsRouter from './menus_desserts.js'; 
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is a menu');
});

router.use('/desserts', menuDessertsRouter); 


export default router;
