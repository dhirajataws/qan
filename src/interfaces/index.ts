type driveType = "2wd" | "4wd" | "awd";
export interface Car{
  brand:string;
  color:string;
  engineSize:number;
  drive:driveType;
  url?:string
}

// export interface dbInterface {
//   save:Object()
//
//   get():Object
//
//   find():Object[]
// }