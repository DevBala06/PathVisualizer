import { Schema, model, models } from "mongoose";
import { Document, Types } from "mongoose";

export interface GridConfigType extends Document {
  user: Types.ObjectId; // Reference to User Model
  tabId: string;
  algorithm: string;
  maze: string;
  grid: {
    rows: number;
    cols: number;
    tiles: {
      row: number;
      col: number;
      isStart: boolean;
      isEnd: boolean;
      isWall: boolean;
      isTraversed: boolean;
      isPath: boolean;
    }[][];
  };
  isGraphVisualized: boolean;
  startTile: {
    row: number;
    col: number;
  };
  endTile: {
    row: number;
    col: number;
  };
  savedAt: Date;
}


const GridConfigSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "NewUser", required: true }, // 🔗 Linking to User
    tabId: { type: String, required: true },
    algorithm: { type: String, required: true },
    maze: { type: String, required: true },
    grid: { type: Object, required: true },
    isGraphVisualized: { type: Boolean, required: true },
    startTile: { type: Object, required: true },
    endTile: { type: Object, required: true },
    savedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const GridConfig = models.GridConfig || model("GridConfig", GridConfigSchema);
export default GridConfig;
