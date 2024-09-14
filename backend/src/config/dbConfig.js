const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log(`Connected to MongoDB! Database name: "${process.env.DATABASE_NAME}"`);
    } catch (err) {
        console.error('Database connection error: ', err);
        throw err;
    }
};

module.exports = dbConnect;