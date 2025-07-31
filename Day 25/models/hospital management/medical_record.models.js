import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patient",
        required:true
    },
    dateofVisit:{
        type:Date,
        default:Date.now,   
    },
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor",
    },
    notes:{
        type:String
    },
    
},{timestamps:true})

export const MedicalRecord = mongoose.model("MedicalRecord",medicalRecordSchema)