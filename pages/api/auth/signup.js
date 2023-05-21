import connectMongo from '../../../database/conn';
import User from '../../../model/Schema';
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
  try {
    // Connect to the MongoDB database
    await connectMongo();

    // Only POST method is accepted
    if (req.method === 'POST') {
      if (!req.body) return res.status(404).json({ error: "Don't have form data...!" });
      const { username, email, password } = req.body;

      // Check if the user already exists
      const checkExisting = await User.findOne({ email });
      if (checkExisting) return res.status(422).json({ message: 'User Already Exists...!' });

      // Hash password
      const hashedPassword = await hash(password, 12);

      // Create a new user
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

      // Save the user to the database
      const savedUser = await newUser.save();

      res.status(201).json({ status: true, user: savedUser });
    } else {
      res.status(500).json({ message: 'HTTP method not valid, only POST accepted' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}
