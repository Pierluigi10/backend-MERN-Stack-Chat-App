import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: "string", required: true },
    email: { type: "String", required: true, unique: true},
    password: { type: "String", required: true },
    pic: {
      type: "String",
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg", //default pic
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
