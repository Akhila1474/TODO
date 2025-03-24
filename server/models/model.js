const express=require('express');
const mongoose=require('mongoose');

const todoschema=mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        default:false
    }
})

const todoModel=mongoose.model('todo',todoschema);

 module.exports=todoModel;