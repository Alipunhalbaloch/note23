const mongoose=require('mongoose');
const URI="mongodb://127.0.0.1:27017/CloudyNotes";

const connectToMongo = ()=>{
    console.log("conected mongo");
    mongoose.connect(URI);
}


module.exports=connectToMongo;