import connectToDb from "@/utils/config/db";
import { NextRequest, NextResponse } from "next/server";
import NewUser from "@/utils/models/user.model";
import GridConfig from "@/utils/models/GridConfig.model";

export async function POST(request: NextRequest) {
  await connectToDb();

  const body = await request.json();
  const { clerkId, tabId, algorithm, maze, grid, isGraphVisualized, startTile, endTile } = body;

  try {
    // ✅ Find User By Clerk ID
    const user = await NewUser.findOne({ clerkId });

    if (!user) {
      return NextResponse.json({ message: "User not found", status: 404 });
    }

    const existingGrid = await GridConfig.findOne({ user: user._id, tabId });

    if (existingGrid) {
      existingGrid.algorithm = algorithm;
      existingGrid.maze = maze;
      existingGrid.grid = grid;
      existingGrid.isGraphVisualized = isGraphVisualized;
      existingGrid.startTile = startTile;
      existingGrid.endTile = endTile;
      existingGrid.savedAt = new Date();
      await existingGrid.save();
    } else {
      const newGrid = await GridConfig.create({
        user: user._id,
        tabId,
        algorithm,
        maze,
        grid,
        isGraphVisualized,
        startTile,
        endTile,
      });

      user.gridConfigs.push(newGrid._id);
      await user.save();
    }

    return NextResponse.json({ message: "Grid configuration saved successfully", status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to save grid configuration", status: 500 });
  }
}

export async function GET(request: NextRequest) {
    await connectToDb();
  
    const { searchParams } = new URL(request.url);
    const tabId = searchParams.get("tabId");
  
    if (!tabId) {
      return NextResponse.json({ message: "Tab ID is required" }, { status: 400 });
    }
  
    try {
      const gridConfig = await GridConfig.findOne({ tabId }).populate("user");
  
      if (!gridConfig) {
        return NextResponse.json({ message: "No grid found" }, { status: 404 });
      }
  
      return NextResponse.json({
        message: "Grid config found",
        gridConfig,
      });
    } catch (error) {
      return NextResponse.json({
        message: "Failed to fetch grid",
        error,
      }, { status: 500 });
    }
  }
  
