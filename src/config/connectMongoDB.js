import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongoose berhasil menghubungkan dengan database.`);
  } catch (err) {
    console.error(
      "Kesalahan saat menghubungkan Mongoose dengan database:",
      err
    );
    process.exit(1);
  }
};

export default connDB;
