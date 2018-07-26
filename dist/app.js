"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./helpers/index");
var car1 = {
    brand: "branch",
    color: "color",
    engineSize: 100,
    drive: "2wd"
};
var car2 = {
    brand: "anch",
    color: "color",
    engineSize: 100,
    drive: "2wd"
};
// const request = new Request();
// request.get("url");
// const car_db = new CarDb();
var db = new index_1.Database(); //Database is for saving any type of object to database
db.save(car1);
db.save(car2);
// console.log(db.get())
// db.save({value:"dhiraj"})
// console.log(db.get())
// console.log(db.find("brand",new RegExp("br")))
