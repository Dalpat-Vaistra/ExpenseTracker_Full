import * as Mongoose from "mongoose";
import { NextFunction } from "express";
import * as bcrypt from "bcrypt";

export interface UserDocument extends Mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new Mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.pre("save", async function (next: NextFunction) {
  let user = this as UserDocument;

  //Only has the password if it has been modified(or is new)
  if (!user.isModified("password")) return next();

  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(user.password, salt);

  user.password = hash;

  return next();
});

// UserSchema.methods.comparePassword = async (candidatePassword: string) => {
//   const user = this as UserDocument;
//   return bcrypt.compare(candidatePassword, user.password).catch((err) => false);
// };

const User = Mongoose.model<UserDocument>("users", UserSchema);

export default User;
// export UserSchema.methods.comparePassword;
