import {Database, fetchUrlResults, initaliseDb} from "./helpers/index";
import {Car} from "./interfaces/index";
import {carDetails} from "./data/index";

const urlArray = [
  'http://site1.com/path',
  'http://site2.com/path',
  'http://site3.com/path',
  'http://test.com/path'
]

// export const initaliseDb= function(){
//   const db = new Database();
//   db.data = carDetails;
//   return db;
// }
export const fetchUrlData = async function () {
//Database is for saving any type of object to database
  const db = new Database();

  const allPromises = urlArray.map(fetchUrlResults)
  const combinedPromise = Promise.all(allPromises)
  const details = await combinedPromise;
  for (const item of details) {
    db.save(<Car>item)
    if (item.url && item.url.split('/')[2] === 'test.com') {
      console.log(item)
    }
  }
};
export const  findAllNonAWDCars= function () {
  const db = initaliseDb();

  return db.find('color',/Black/)
}


// export const testFetchUrlData = async function () {
//   const result = await fetchUrlData()
//   const filteredResult = result.filter(item => item.url ? item.url.split('/')[2] === 'test.com':false)
//   if(filteredResult.length > 0)
//   console.log(filteredResult)
// }()