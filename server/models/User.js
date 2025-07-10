import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String }, // not required
    email: { type: String }, // not required
    imageUrl: { type: String }, // not required
    enrolledCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ],
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User