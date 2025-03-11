import { Schema, Types, model, models } from "mongoose";

interface NewUserType extends Document {
  clerkId: string;
  email: string;
  userName?: string;
  firstName?: string;
  lastName?: string;
  subscription:string;
  subscriptionId?: string;
  gridConfigs: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const NewUserSchema = new Schema<NewUserType>(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    userName: {
      type: String,
      unique: true,
      maxlength: [50, "Username cannot exceed 50 characters"],
    },
    firstName: {
      type: String,
      maxlength: [50, "First name cannot exceed 50 characters"],
    },
    lastName: {
      type: String,
      maxlength: [50, "Last name cannot exceed 50 characters"],
    },
    subscriptionId: {
        type: String,
        unique: true,
        sparse: true,
      },
    subscription: {
        type: String,
        default: "Free Trial",
        enum: ["Free Trial", "Business Plan", "Enterprise Plan"],
      }, 
  gridConfigs: [{ type: Schema.Types.ObjectId, ref: "GridConfig" }],

  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const NewUser = models.NewUser || model("NewUser", NewUserSchema);
export default NewUser;


