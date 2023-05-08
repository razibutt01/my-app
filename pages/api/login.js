import connect from '../../middleware/db';
import User from '../../models/userModel';

export default async function handler(req, res) {
  await connect();

  if (req.method === 'POST') {
    const { email, password } = req.body;
console.log(password)
    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide an email and password.' });
    }

    try {
      // Check if a user with the provided email exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }

      // Check if the provided password is correct
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
      
        return res.status(401).json({ message: 'Invalid credentials.' });
      }

      // Return a success response
      return res.status(200).json({ user: user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'An error occurred while logging in.' });
    }
  }

  // Return a 404 response for any other request methods
  res.status(404).json({ message: 'Endpoint not found.' });
}
