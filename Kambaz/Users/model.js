import mongoose from "mongoose";
import schema from "./schema.js";

const model = mongoose.model("UserModel", schema); // create mongoose model from schema 
export default model; // export so it can be used elsewhere 
