import connect from "../../middleware/db";
const Result = require("../../models/result");

export default async function handler(req, res) {
  const { userId } = req.query;
  console.log(userId);

  try {
    // Connect to the database
    await connect();

    // Retrieve all results for the specified user
    const results = await Result.find({ user: userId });
    console.log(results);
    return res.status(200).json(results);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
}
