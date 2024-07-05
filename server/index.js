"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var cors_1 = require("cors");
var Todoroutes_1 = require("./routes/Todoroutes");
var app = (0, express_1)();
app.use((0, cors_1)({
    origin: "http://localhost:5173"
}));
var PORT = 3000;
app.use(express_1.json());
app.use(express_1.urlencoded({ extended: true }));
app.use('/api', Todoroutes_1.router);
// middleware
app.listen(PORT, function () {
    console.log("app is listening on ".concat(PORT));
});
app.get("/test", function (req, res) {
    res.json({ data: "test page" });
});
mongoose_1.default.connect("mongodb+srv://chaudharyrajan387:ONko2gboBL3XQoit@cluster0.th5ubyi.mongodb.net/Todo")
    .then(function () { return console.log("mongodb connected....."); })
    .catch(function (err) {
    console.log("error caught ", err);
});
