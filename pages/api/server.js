import connect from '../../middleware/db';
import User from '../../models/userModel';

export default async function handler(req, res) {
  const db = await connect();
  const users = await User.find({});

  res.json(users);
}