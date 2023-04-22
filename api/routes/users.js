const router = require("express").Router();
// const { Router } = require("express");
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");



//Update
router.put("/:id",verify, async (req, res) => {
    // console.log(req.user .id);
    // console.log(req.params.id);
    // if (req.user.id === req.params.id || req.user.isAdmin) {

    //     if (req.body.password) {
    //         req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
    //     }

    //     try {

    //         const updateUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body});
    //         console.log(updateUser);
    //         res.status({
    //             data:updateUser
    //         }).json(updateUser);

    //     } catch (err) {
    //         res.status(500).json(err)
    //         console.log(err)
    //     }
    // }else{

    //     res.status(403).json("You can update only your account!")
    // }

console.log(req.params.id);

const updating = await User.updateOne({
    _id:req.params.id
},{username:req.body.username})
console.log(updating);
res.send({
    type:"success",
    data:updating
})

});
//Delete
//Get
//Get All
//Get User Stats

module.exports = router