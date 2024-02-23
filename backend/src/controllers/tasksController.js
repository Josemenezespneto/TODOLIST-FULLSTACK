const { response } = require("express");

const getAll=(req,res) =>{
return res.status(200).json({message:"get all data"});
};


module.exports={
    getAll
};