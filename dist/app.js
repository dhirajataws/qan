"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./helpers/index");
var save_1 = require("./save");
// const car1
// } from "./save";
exports.getCar = function (url) {
    var request = new index_1.Request();
    return request.get(url);
};
// console.log(getCar("http://test.com/path"));
console.log(save_1.findAllNonAWDCars());
// :Car = {
//   brand:"branch",
//     color:"color",
//   engineSize:100,
//   drive:"2wd"
// }
// const car2:Car = {
//   brand:"anch",
//   color:"color",
//   engineSize:100,
//   drive:"2wd"
// }
// const car_db = new CarDb();
// const db = new Database();//Database is for saving any type of object to database
// db.save(car1)
// db.save(car2)
// console.log(db.get())
// db.save({value:"dhiraj"})
// console.log(db.get())
// console.log(db.find("brand",new RegExp("br")))
