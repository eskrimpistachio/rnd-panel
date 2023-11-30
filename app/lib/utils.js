import mongoose from 'mongoose';

const connectDB = async () => {
  const connection = {};

  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect('mongodb://localhost:27017/dashboard');
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};

export default connectDB ;
