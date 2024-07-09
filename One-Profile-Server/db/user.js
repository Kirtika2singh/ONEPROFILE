const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema=new mongoose.Schema({
    name: String,
    opusername: String,
    email: String,
    password: {
        type:String,
        select:false,
    },
    country:String,
    isModified: {
        type: Boolean,
        default: false
    },
    cf: String,   
    cc: String,
    sp: String,
    at: String,
    hr: String,
    cfrating: String,
    ccrating: String,
    sprating: String,
    atrating: String,
    hrrating: String,    
    lastupdate: String,
});
userSchema.pre('save',function(next){
    // if(!this.isModified('password')){
    //     return next();
    // }\
    bcrypt.hash(this.password,10,(err,passwordHash)=>{
        if(err){
            return next(err);
        }
        this.password=passwordHash;
        next();
    });
});
module.exports = mongoose.model("users",userSchema);