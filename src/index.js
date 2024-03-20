import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "./db/index.js";

dotenv.config({
    path:"./env"
});

connectDB();




/*
const app = Express();

;(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (err) => {
            console.error(err);
            throw err;
        });
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }
    catch (e){
        console.error(e);
        throw e;
    }
} )()
*/