import mongoose from 'mongoose';

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const connection = mongoose.connection;
    connection.on('error', (error) => {
      console.error('MongoDB connection error:', error);
    });
    connection.once('open', () => {
      console.log('Connected to MongoDB');
    });

    return Promise.resolve();
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    return Promise.reject(error);
  }
};

export default connectMongo;
