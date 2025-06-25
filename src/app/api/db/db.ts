import mongoose from "mongoose";
const connectiondb = process.env.NEXT_PUBLIC_DB_URL;

async function connectDB() {
  if (!connectiondb) {
    throw new Error(
      "Database connection string is not defined in NEXT_PUBLIC_DB_URL"
    );
  }
  if (!mongoose.connection.readyState) {
    await mongoose.connect(connectiondb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);
    console.log("MongoDB connected");
  }
}

export default connectDB;
