import mongoose from "mongoose";

class Database {
  private static instance: Database;
  private isConnected: boolean = false;

  private constructor() {
    mongoose.set("strictQuery", true);
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public async connect(): Promise<void> {
    if (!process.env.MONGODB_URI) {
      // console.log("MISSING MONGODB_URL");
      return;
    }

    if (this.isConnected) {
      console.log("MongoDB is already connected");
    } else {
      try {
        await mongoose.connect(process.env.MONGODB_URI, {
          dbName: "legaleducproph_dev",
        });

        this.isConnected = true;

        console.log("MongoDB is connected");
      } catch (error) {
        console.log("MongoDB connection failed", error);
      }
    }
  }
}

export default Database;
