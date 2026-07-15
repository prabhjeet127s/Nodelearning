import mongoose from "mongoose";

const subtodo = mongoose.Schema({

    content:{

        type:String,
        reuired:true
    },

    createdBy:{

        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true

    }



})


export const subtodo = mongoose.model('subtodo',subtodo)