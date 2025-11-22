const mongoose = require('mongoose');
require("dotenv").config();


exports.connect = () => {
    MONGODB_URL = mongoose.connect(process.env.MONGODB_URL, {})
        .then(() => {
            console.log("DB Connection successful.");
        })
        .catch((error) => {
            console.log("DB Connection failed.");
            console.error(error.message);
            process.exit(1);
        })
}