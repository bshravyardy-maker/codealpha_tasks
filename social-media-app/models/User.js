import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  username: String,
  bio: String,
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
})

export default mongoose.model("User", UserSchema)