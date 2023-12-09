import mongoose from "mongoose";

// Define an asynchronous function to initialize Mongoose
export async function initMongoose() {
  // Check if the Mongoose connection is already established (readyState === 1)
  if (mongoose.connection.readyState === 1) {
    // If the connection is established, return the current connection as a promise
    return mongoose.connection.asPromise();
  }
  // If the connection is not established, connect to the database using the URL from environment variables
  return await mongoose.connect(process.env.MONGODB_URL);
}
