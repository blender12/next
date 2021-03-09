import mongoose from 'mongoose';
const Schema=mongoose.Schema;
const userSchema=new Schema({
    username:String,email:String,avatar:String,mypost:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'post'/*--Schema name---*/
    }],createdAt:String
});

mongoose.models = {};

const user=mongoose.model('user',userSchema);
 export default user;