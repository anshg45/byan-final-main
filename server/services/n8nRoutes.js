import express from "express";
import User from "../auth/userModel.js";

const router = express.Router();

/**
 * @route POST /api/n8n/update-trust-score
 * @desc Update user trust score and verification status (Called by n8n)
 * @access Public (Protected by secret header ideally, but open for now)
 */
router.post("/update-trust-score", async (req, res) => {
  try {
    const { userId, trustScore, isVerified } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    const updateData = {};
    if (trustScore !== undefined) updateData.trustScore = trustScore;
    if (isVerified !== undefined) updateData.isVerified = isVerified;

    const user = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    console.log(`✅ Trust Score Updated for ${user.email}: Score=${user.trustScore}, Verified=${user.isVerified}`);
    res.json({ message: "Trust score updated successfully", user });
  } catch (error) {
    console.error("❌ Error updating trust score:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
