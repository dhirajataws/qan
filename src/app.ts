import {Request, Database, fetchUrlResults} from "./helpers/index";
import {Car} from "./interfaces/index";
import {findAllNonAWDCars} from './save'
// const car1
// } from "./save";
export const getCar = function(url:string){
  const request = new Request();
  return request.get(url)
}
// console.log(getCar("http://test.com/path"));

console.log(findAllNonAWDCars());
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



