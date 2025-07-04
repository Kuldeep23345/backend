// require("dotenv").config({ path: "./env" });
// ___ notes we can run this env code there is no problem in this code but i am using the import statement toh yee hammare code ki consistency kharab kar raha hai....
import dotenv from "dotenv"; //___ notes if we want to use like this with import statement so we have to change our package.json file  in we have to write in dev     nodemon -r dotenv/config --experimental-json-modules src/index.js ....
dotenv.config({
  path: "./env",
});
import { connectDB } from "./db/index.js";
connectDB();

// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERROR: ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port  ${process.env.PORT} `);
//     });
//   } catch (error) {
//     console.error(`ERROR: " ,`, error);
//     throw error;
//   }
// })();
//__________________________ Notes =>
// This approach is also good for connecting database because we are connecting data base in index.js file which is load with start but there is a good way also for connecting data base in spreate db folder which is completely for db....
