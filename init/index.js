const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
main().then( () => {
    console.log("Connected Successfully");
}).catch(err =>{
    console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
};

const initDb = async () => {
   await Listing.deleteMany({});
   initData.data = initData.data.map((obj)=>({
    ...obj,
    owner:"661a9520eb7c7fe6c610b8d7",
}));

   await Listing.insertMany(initData.data);
   console.log("data was initialized");


};
initDb();