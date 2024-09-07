import mongoose, {Mongoose} from "mongoose";

const TaskSchema = new mongoose.Schema(
    {
        title:{type:String,required: true},
        description:{type:String,required: true},
        status:{type:String,required: true},
        user_id:{type:Mongoose.Schema.Types.ObjectId,required:true}
    },
    {
        timestamps: true,
        versionKey:false
    }
)

const Tasks = mongoose.model("tasks", TaskSchema);

module.exports =  Tasks;