import mongoose from "mongoose";
const { Schema, model } = mongoose;

const authorSchema = new Schema(
  {
    fname: {
      type: String,
      require: true,
    },
    lname: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
      enum: ["Mr", "Mrs", "Miss"],
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const AuthorModel = model("authorModel", authorSchema);

export default AuthorModel;
