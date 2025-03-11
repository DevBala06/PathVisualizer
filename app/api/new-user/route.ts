import connectToDb from "@/utils/config/db";
import NewUser from "@/utils/models/user.model";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectToDb();

        const users = await NewUser.find();

        return NextResponse.json({
            message: "Users fetched successfully",
            users
        }, { status: 200 });

    } catch (error:unknown) {
        console.error("Error fetching users:", error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : "Unknown error",
            message: "Failed to fetch users"
        }, { status: 500 });
    }
};

export const POST = async (request: Request) => {
    try {
        await connectToDb();

        const body = await request.json();

        const { clerkId,subscription,subscriptionId,userName, email, createdAt, updatedAt ,firstName,lastName } = body;
        console.log(subscription)
        console.log(subscriptionId)
        
        if(subscription){
            if(clerkId){
                const updatedUser = await NewUser.findOneAndUpdate(
                    { clerkId },
                    {
                        subscription,
                        subscriptionId,
                        updatedAt,
                    },
                    {new:true}
    
                )
                return NextResponse.json({
                message: "User updated successfully",
                updatedUser,
            }, { status: 201 });
            }

        }else{

        const currentUser = await NewUser.findOne({ clerkId });
      if(currentUser){
        const user = await NewUser.findOneAndUpdate(
            { clerkId },
            {
              userName,
              email,
              firstName,
              lastName,
              createdAt,
              updatedAt,
            },
            { upsert: true, new: true } 
          );

        // const savedUser = await user.save();

        return NextResponse.json({
            message: "User created successfully",
            user,
        }, { status: 201 });}
        else{
            const user = await NewUser.findOneAndUpdate(
                { clerkId },
                {
                  userName,
                  email,
                  firstName,
                  lastName,
                  subscription:"Free Trial",
                  createdAt,
                  updatedAt,
                },
                { upsert: true, new: true } 
              );
    
            // const savedUser = await user.save();
    
            return NextResponse.json({
                message: "User created successfully",
                user,
            }, { status: 201 });}
        }
    
    } catch (error: unknown) {
        console.error("Error creating user:", error);
        return NextResponse.json({
            message: "Failed to create user", 
            error: error instanceof Error ? error.message : "Unknown error",
        }, { status: 500 });
    }
};