import dns from 'dns'
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

export default dbConnect;

async function dbConnect() {
  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }
  dns.setServers(['1.1.1.1', '8.8.8.8']);
  await mongoose.connect(MONGODB_URI);
  return mongoose;
}