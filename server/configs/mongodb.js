import mongoose from "mongoose";

// Connect to the MongoDB database
const connectDB = async () => {

    try {
        mongoose.connection.on('connected', () => console.log('Database Connected'))
        mongoose.connection.on('error', (err) => console.log('Database Connection Error:', err))

        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
        console.error('MongoDB Connection Error:', error)
        throw error
    }

}

export default connectDB