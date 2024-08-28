const mongoose=require("mongoose");
const {Schema} = mongoose;


const UserSchema =  new Schema({
    name: {type: String, required: true},
    email: {type:String, required:true, unique:true},
    password: {type: String, required: true, unique: true},
});

const UserModel = mongoose.model("User", UserSchema);

module.exports= UserModel; 


//Created the template of the schema and compiled it in the model called User
//The schema defines the structure of the documents in a MongoDB collection.
//The model uses this schema to create and manipulate documents.


//bookingapp pass
//grewalkdiljot username
