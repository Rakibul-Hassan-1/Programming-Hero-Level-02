import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import config from "./config";
import userRoute from "./modules/user/user.route";

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoute);

app.get("/", (req, res) => {
  res.send({ success: true, message: "✅ Server is running." });
});

async function server() {
  try {
    // connect database
    await mongoose.connect(config.mongodb_url!);
    console.log("✅ MongoDB connected successfully");

    // start server only after DB connection
    app.listen(config.port, () => {
      //   console.log(config);
      console.log(`✅ Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error("❌ Error starting server:", error);
    process.exit(1);
  }
}

server();
