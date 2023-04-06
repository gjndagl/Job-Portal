const JobType = require('../model/jobTypeModel');
const ErrorResponse =require('../utils/errorResponse');

exports.createJobType = async(req,res,next) =>{
    try{
        const jobT = await JobType.create({
            jobTypeName: req.body.jobTypeName,
            user: req.user.id
        });
        res.status(201).json({
            success: true,
            jobT
        });
    }catch(error){
        next(error);
    }
}

exports.allJobType = async(req,res,next) =>{
    try{
        const jobT = await JobType.find();
           
        res.status(200).json({
            success: true,
            jobT
        });
    }catch(error){
        next(error);
    }
}