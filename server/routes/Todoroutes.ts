import express ,{Request,Response} from 'express';
import {getTodo} from '../controller/controller';
import {saveTodo} from '../controller/controller';
import {updateTodo} from '../controller/controller';
import {deleteTodo }from '../controller/controller';
const router=express.Router();
const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
  }
};
router.get('/home', getTodo);
  router.post('/save', saveTodo);
  router.put('/update/:id', updateTodo);
  router.delete('/delete/:id', deleteTodo);
export  {router};