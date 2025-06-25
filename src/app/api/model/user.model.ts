/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "../interace/user.interface";
import bcrypt from "bcrypt";

// Extend IUser with Mongoose Document interface
// Ensure IUser does not declare its own 'id' property, or if it does, it should be compatible with Document's 'id' (string).
interface IUserDocument extends Omit<IUser, "id">, Document {
  isModified(path: string): boolean;
}

const UserSchema: Schema = new Schema<IUserDocument>(
  {
    name: { type: String },
    email: { type: String },
    isActive: { type: Boolean, default: true },
    role: {
      type: String,
      enum: ["user", "admin", "guest", "moderator", "superadmin", "editor"],
      default: "user",
    },
    image: { type: String },
    phone: { type: String },
    address: { type: String },
    dateOfBirth: { type: String },
    gender: { type: String, enum: ["male", "female", "other"] },
    lastLogin: { type: String },
    nationality: { type: String },
    bio: { type: String },
    website: { type: String },
    facebook: { type: String },
    twitter: { type: String },
    linkedin: { type: String },
    github: { type: String },
    language: { type: String },
    timezone: { type: String },
    password: { type: String },
    emailVerified: { type: Boolean, default: false },
    phoneVerified: { type: Boolean, default: false },
    statusMessage: { type: String },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre<IUserDocument>("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    if (!this.password) {
      return next(new Error("Password is required"));
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
  } catch (error: any) {
    return next(error);
  }
});

const User = mongoose.model<IUserDocument>("User", UserSchema);

export default User;
