const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    token: {
        type: String,
    },
    favorite: {
        type: [String]
    }
})

userSchema.pre('save', async function(next){
    const user = this;
    if(user.isModified('password')){
        user.password = await bcrypt.hashSync(user.password, 10);
    }
    next();
})

userSchema.statics.findByCredentials = async function (email, password) {
    
    const user = await User.findOne({email})
    console.log(password)
    console.log(user.password)
    if(!user){
        throw new Error('Invalid email')
    }
    const passwordMatch = await bcrypt.compareSync(password, user.password);
    if(!passwordMatch){
        throw new Error('Invalid password')
    }
    return user;
}

userSchema.methods.generateToken = async function () {
    const user = this;
    const token = await  jwt.sign({_id: user._id}, "mealsSecret", {expiresIn: "10h"});
    user.token = token;
    await user.save();
    return token;

};

userSchema.methods.toJSON = function(){
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject._id;
    return userObject;
}

const User = mongoose.model('User', userSchema);
module.exports = User;