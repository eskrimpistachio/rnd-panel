import mongoose from "mongoose";

export const connectDB = async () => {

    const connection = {}

  try {
    if(connection.isConnected) return ;
    const db = await mongoose.connect('mongodb://localhost:27017');
    connection.isConnected = db.connection[0].readyState
  } catch (error) {
    throw new Error(error);
  }
};
