const express = require('express');
const User = require('../Model/userModel.js');
const bcyrpt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const RegisterUser = async (req,res) => {
    const {username, password} = req.body;

    const hashPassword = await bcyrpt.hash(password,10);

    const user = new User({username, password: hashPassword});

    await user.save();

    res.send("User created successfully");
}



const LoginUser = async (req,res) => {
    const {username, password} = req.body;

    const user = await User.findOne({username});

    if(!user){
        return res.status(400).send("Username Incorect");
    }

    const isPassword = await  bcyrpt.compare(password, user.password);
    if(!isPassword){
        return res.status(400).send("Password Incorect");
    }


    const token = await jwt.sign({_id: user._id}, 'your_jwt_secret');
    res.send({token}); 
}

const userAccount = {RegisterUser, LoginUser};

module.exports = userAccount;