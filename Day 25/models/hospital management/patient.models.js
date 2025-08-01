import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    diagonsedWith:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    bloodGroup:{
        type:String,
        enums:["A+","A-","B+","B-","AB+","AB-","O+","O-"],
        required:true
    },
    Gender:{
        type:String,
        enums:["Male","Female","Other"],
        required:true
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }
},{timestamps:true})

export const Patient = mongoose.model("Patient",patientSchema)