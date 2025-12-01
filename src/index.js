import dotenv from 'dotenv'
import mongoose from 'mongoose';

import connectDB from './db/index.js';
import app from './app.js'

dotenv.config()


connectDB()
  .then(() => {
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`APP IS RUNNING ON PORT ${PORT}`);
    });

    app.on("error", (err) => {
      console.log("App error:", err);
    });
  })
  .catch((err) => {
    console.log("DATABASE CONNECTION FAILED:", err);
    process.exit(1);
  });

