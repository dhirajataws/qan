import {Car} from '../interfaces';
import {carDetails} from "../data/index";

export async function fetchUrlResults(url:string){
return new Promise((resolve, reject)=>{
  setTimeout(()=>{
    // console.log(url)
    const cars = carDetails.filter((item:any) => item.url === url)
    cars.length > 0 ? resolve(cars[0]) : reject('Not Found')
    // resolve('ok')
  },1000)
})
}
export class Request{
  constructor(){}
  get(url:string):Car{
    return {
      brand:"branch",
    color:"color",
    engineSize:100,
    drive:"2wd"
    }
  }
}

export class Database {//implements dbInterface{
  data:any[]
  constructor(){
    this.data = []
  }
  //  write a function to save to to a file
  save(carObject:Car){
    // write to database
    this.data=[...this.data, carObject]
  }
  get():Car[]{
    return this.data
  }
  find(attr: string, what: RegExp):any[]{

    // const regex = new RegExp("dhiraj")
    // regex.test()

    return this.data.filter(item => item.hasOwnProperty(attr) && what.test(item[attr]))
    // return carObjects.filter(item => what.test(item[what]))
  }
}
// export class CarDb implements dbinterface{
//   data:any[]
//   constructor(){
//     this.data = []
//   }
//   save(carObject:Car){
//     this.data=[...this.data,carObject]
//   }
//   // get():any[]{
//   //   return this.data
//   // }
//  /* find(attr: string, what: RegExp):Car[]{
//     return {
//       brand:"branch",
//       color:"color",
//       engineSize:100,
//       drive:"2wd"
//     }
//     // const regex = new RegExp("dhiraj")
//     // regex.test()
//
//     // let carObjects = this.data.filter(item => item is Car)
//     // return carObjects.filter(item => what.test(item[what]))
//   }*/
// }
// export class Database{
//   car_db:CarDb
//   constructor(){
//     this.car_db= new CarDb();
//   }
//   save(obj:Object){
//     // this.data=[...this.data,obj]
//     if(obj instanceof Car ){
//       this.car_db.save(obj)
//     }
//   }
//
// }