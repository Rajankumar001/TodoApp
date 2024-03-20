import mongoose,{Schema,Document} from 'mongoose';
interface user{
    toDo:String;
}
const Todoschema: Schema=new Schema({
    toDo:{
        type:String,
        required:true
    }
});
export default mongoose.model<user>("ToDo",Todoschema);
