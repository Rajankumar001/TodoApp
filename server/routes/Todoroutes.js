"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express = require("express");
var controller_1 = require("../controller/controller");
var controller_2 = require("../controller/controller");
var controller_3 = require("../controller/controller");
var controller_4 = require("../controller/controller");
 var router = express.Router();

var config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
    }
};
router.get('/home', controller_1.getTodo);
router.post('/save', controller_2.saveTodo);
router.put('/update/:id', controller_3.updateTodo);
router.delete('/delete/:id', controller_4.deleteTodo);

exports.router=router;