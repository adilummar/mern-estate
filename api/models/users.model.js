import { time, timeStamp } from "console";
import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avathar:{
    type:String,
    default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fdefault-avatar-female-profile-user-icon-picture-portrait-symbol-member-people-flat-style-circle-button-photo-silhouette-image272121255&psig=AOvVaw3p7EX762LWlmhuA2nHUB39&ust=1730090720739000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDqiqrgrYkDFQAAAAAdAAAAABAE"
  }
},{timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;
