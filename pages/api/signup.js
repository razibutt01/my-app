import connect from '../../middleware/db';
import User from '../../models/userModel';


export default async function handler(req, res) {
  await connect();

  if (req.method === 'POST') {
    const { name, email, password, address, city } = req.body;

    // Basic validation
    if (!name || !email || !password || !address || !city) {
      return res.status(400).json({ message: 'Please fill all fields.' });
    }

    try {
      // Check if a user with the provided email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'A user with that email already exists.' });
      }

      // Create a new user object with the provided details
      const user = new User({
        name,
        email,
        password,
        address,
        city,
      });

      // Save the new user to the database
      await user.save();

      // Return a success response
      return res.status(200).json({ user: user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'An error occurred while creating the user.' });
    }
  }

  // Return a 404 response for any other request methods
  res.status(404).json({ message: 'Endpoint not found.' });
}

