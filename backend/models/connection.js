import mongoose from 'mongoose';
const url="mongodb://localhost:27017/svvv";
mongoose.connect(url);
console.log("Successfully connected to mongodb database...");