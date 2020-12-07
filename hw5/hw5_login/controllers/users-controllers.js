const { find, findOne } = require("../models/user");
const User = require("../models/user");

const signup = async (req, res, next) => {
    // console.log(req);
    const { account, password } = req.body;
    console.log(account);
    console.log(password);
    const newUser = new User({ account, password });
    try {
        await newUser.save();
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
    res.status(201).json({ message: "success" });
};

const login = async (req, res, next) => {
     const {account,password}=req.body;
     let user;
     try {
        user = await User.findOne({account: account});
     } catch(error) {
         console.log(error);
     }
     if (user && user.password === password){
         res.status(201).json({message: "login success!"})
     }
     else{
         res.status(404).json({message:"wrong password"})
     }
}

exports.signup = signup;
exports.login = login;