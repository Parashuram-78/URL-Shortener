import {app} from './app.js';
import connectDb from './database/db.js'
connectDb();
const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", ()=>{
    console.log(`Server is running on ${port}`)
});
