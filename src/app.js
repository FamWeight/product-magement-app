import Hapi from "@hapi/hapi";
import booksRoute from "./api/routes/booksRoute.js";
import connDB from "./config/connectMongoDB.js";
import dotenv from "dotenv";
dotenv.config();

const init = async () => {
  try {
    await connDB();

    const server = Hapi.server({
      port: process.env.PORT || 3000,
      host: process.env.HOST || "localhost",
    });

    booksRoute(server);

    await server.start();
    console.log(`Server berjalan di: ${server.info.uri}`);
  } catch (error) {
    console.error("Terjadi kesalahan saat memulai server:", error);
    process.exit(1);
  }
};
process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
