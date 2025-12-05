import { Timestamp } from "mongodb";
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";


const videoSchema = mongoose.Schema(
    {
        title: {
            type:String,
            required:true,
            trim:true,
        },
        description: {
            type:String,
            required:true,
            trim:true,
        },

    },
    {
        timestamps:true
    }
)

videoSchema.plugin(mongoosePaginate)

export const Video = mongoose.model('Video', videoSchema);