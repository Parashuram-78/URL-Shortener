import mongoose from "mongoose";
const urlschema= new mongoose.Schema({
shortId:{
    type: String,
    required: true,
    unique: true
},
reDirectUrl:{
    type: String,
    required: true,
},
visitHistory: [{
    timestamp: {
        type:Number
    }
}], 
},
{timestamps: true});
export default mongoose.model('URL', urlschema);