import { model, Schema } from "mongoose";
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["Admin", "Customer"], default: "Customer" },
});

const User = model<IUser>("User", userSchema);
export default User;
