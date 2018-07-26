import {Database, fetchUrlResults} from "./helpers/index";
import {Car} from "./interfaces/index";
const urlArray = [
  'http://site1.com/path',
  'http://site2.com/path',
  'http://site3.com/path',
  'http://test.com/path'
]

const fetchUrlData = async function () {
//Database is for saving any type of object to database
  const db = new Database();

  const allPromises = urlArray.map(fetchUrlResults)
  const combinedPromise = Promise.all(allPromises)
  const details = await combinedPromise;
  // for (const item of details) {
  //   db.save(<Car>item)
  // }
  details.map(item => db.save(<Car>item))
  return db.get();
};
export const testFetchUrlData = async function () {
  const result = await fetchUrlData()
  const filteredResult = result.filter(item => item.url ? item.url.split('/')[2] === 'test.com':false)
  if(filteredResult.length > 0)
  console.log(filteredResult)
}()