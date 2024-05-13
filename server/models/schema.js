"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Todoschema = new mongoose_1.Schema({
    toDo: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.default.model("ToDo", Todoschema);
