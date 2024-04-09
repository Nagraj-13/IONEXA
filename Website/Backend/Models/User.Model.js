import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    phoneNo : {
        type: String,
        required:true
    },
    // amount: {
    //     type: Number,
    //     required: true
    // }
})
export default mongoose.model('User', UserSchema);