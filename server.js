import {app} from './app.js';
import connectDb from './database/db.js'
connectDb();
const PORT=4000;
app.listen('4000', ()=>{
    console.log(`Server is running on ${PORT}`)
});
