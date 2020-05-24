import mongoose from 'mongoose';
require('dotenv').config({path: './next-config.js'})

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect("mongodb+srv://Brian:nintendo99@cluster0-fxj7b.mongodb.net/test?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;