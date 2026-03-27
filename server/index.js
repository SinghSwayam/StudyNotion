const express = require("express");
const app = express();
const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payment");
const courseRoutes = require("./routes/Course");
const contactUsRoute = require("./routes/Contact");
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const PORT = process.env.PORT || 4000;

// DB connect
database.connect();
//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: ["https://study-notion-drab-phi.vercel.app", "http://localhost:3000"],
        credentials: true,
    })
)

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

// Cloudinary
cloudinaryConnect();

// Routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/reach", contactUsRoute);

// Default route
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

app.get("/api/v1/health/db", async (req, res) => {
  try {
    const dbState = mongoose.connection.readyState;
    if (dbState !== 1) {
      return res.status(503).json({
        success: false,
        message: "Database is not connected",
      });
    }

    await mongoose.connection.db.admin().ping();

    return res.status(200).json({
      success: true,
      message: "Database ping successful",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Database ping failed",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
