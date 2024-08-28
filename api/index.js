const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const User = require("./models/User.js");
require("dotenv").config()
const bcrypt = require("bcryptjs");
const UserModel = require("./models/User.js");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");


const bcryptSalt = bcrypt.genSaltSync(8); 
const jwtSecret = "fastandfurious";

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    credentials: true,
    origin:"http://10.0.0.14:5173",
}));

mongoose.connect("mongodb+srv://grewalkdiljot:bookingapp@cluster0.h6loj3z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() =>{
    console.log("MongoDB Connected");
})
.catch(err=>{
    console.error("Mongodb error:", err);
});



app.get("/test",(req,res)=>{
    res.json("testok");
});




app.post("/register", async (req,res)=>{
    const {name,email,password}=req.body;


    try{ const userDoc =await User.create({
        name,email,password:bcrypt.hashSync(password,bcryptSalt),
    });
    
    res.json(userDoc);
} catch(e){
    res.status(422).json(e);
}    
}
);


app.post("/login", async (req,res)=>{
    const{email,password}=req.body;
    const userDoc = await User.findOne({email});
    if (userDoc){
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if(passOk){
            jwt.sign({email: userDoc.email, id: userDoc._id}, jwtSecret, {}, (err,token)=>{
                if (err) throw err;
                res.cookie("token", "").json(userDoc);
            });
           
        }else{
            res.status(422).json("pass not ok");
        }
    }else{
        res.json("not found");
    }
   
});

app.get("/profile", (res,req)=>{
    const {token} = req.cookie;
    res.json({token});
});

app.listen(3000);

//database password diljotgrewal
//database username booking