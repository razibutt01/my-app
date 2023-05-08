import connect from "../../middleware/db";
const Result = require("../../models/result");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { userId, disease, remedies, dermatologists } = req.body;

  try {
    await connect();
    const result = new Result({
      user: userId,
      disease,
      remedies,
      dermatologists,
    });
    await result.save();
    return res.status(200).json({ message: "Result saved successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
}
