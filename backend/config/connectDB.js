import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO);
    console.log(conn.connection.host);
  } catch (err) {
    console.log("error throwed while connecting to mongodb", err);
  }
};

export default connectDB;
