import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://KHariCharan:2310030302@cluster0.89vvb5k.mongodb.net/notesapp')
            console.log("MongoDB connected")
        } catch (error) {
            console.error("Error in connecting  MongoDB:", error);
        }
}