import mongoose from "mongoose";

export default function connect() {
    const database = "mongodb+srv://amthermoso:LMYgR5rf7krZl6nX@todocluster.hkvte.mongodb.net/?retryWrites=true&w=majority&appName=TodoCluster";
    mongoose
    .connect(database)
    .then(() => {
        console.log("Connected to database");
    })
    .catch((error) => {
        console.log(error);
    });
}