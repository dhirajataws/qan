import {Request, Database, fetchUrlResults} from "./helpers/index";
import {Car} from "./interfaces/index";

const car1:Car = {
  brand:"branch",
    color:"color",
  engineSize:100,
  drive:"2wd"
}
const car2:Car = {
  brand:"anch",
  color:"color",
  engineSize:100,
  drive:"2wd"
}
// const request = new Request();
// request.get("url");
// const car_db = new CarDb();
const db = new Database();//Database is for saving any type of object to database
db.save(car1)
db.save(car2)
// console.log(db.get())
// db.save({value:"dhiraj"})
// console.log(db.get())
// console.log(db.find("brand",new RegExp("br")))



