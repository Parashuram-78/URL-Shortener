import mongoose from "mongoose";
const dbConnect=()=>{
mongoose.connect('mongodb://127.0.0.1:27017',{
    dbname:'URLShortener',
}).then(()=>{
    console.log("Database connected")
}).catch((err)=>{
console.log(err);
});
};
export default dbConnect;