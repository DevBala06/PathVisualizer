import { Schema, model, models } from 'mongoose';

interface NewUserType extends Document {
    clerkId:string;
    email:string;
    userName:string;
    firstName:string;
    lastName:string;
    createdAt: Date;
    updatedAt: Date;
};

const NewUserSchema = new Schema<NewUserType>({
    clerkId:{
        type: String,
        required:true,
        unique:true,
    },
    email:{
        type: String,
        required:true,
        unique:true,
    },
    userName: {
        type: String,
        unique:true,
        maxlength: [50, 'Username cannot exceed 50 characters'],
    },
    firstName: {
        type: String,
        unique:true,
        maxlength: [50, 'LastName cannot exceed 50 characters'],
    },
    lastName: {
        type: String,
        unique:true,
        maxlength: [50, 'lastName cannot exceed 50 characters'],
    },
}, {
    timestamps: true,
    versionKey: false,
});

const NewUser = models.NewUser || model('NewUser', NewUserSchema);
export default NewUser;