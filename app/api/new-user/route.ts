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

        const { clerkId, userName, email, createdAt, updatedAt ,firstName,lastName } = body;
        // const currentUser = await NewUser.findOne({ clerkId });
        
       

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
        }, { status: 201 });
    
    } catch (error: unknown) {
        console.error("Error creating user:", error);
        return NextResponse.json({
            message: "Failed to create user", 
            error: error instanceof Error ? error.message : "Unknown error",
        }, { status: 500 });
    }
};