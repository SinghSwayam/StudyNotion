const User = require('../models/User');
const mailSender = require('../utils/mailSender');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
require("dotenv").config();

//************************************************resetPasswordToken************************************************

exports.resetPasswordToken = async (req, res) => {
    try {
        // Get email address from request body
        const { email } = req.body;

        // Check if user exists for this email address
        const checkUserPresent = await User.findOne({ email: email });
        // If user does not exist
        if (!checkUserPresent) {
            return res.status(401).json({
                success: false,
                message: "User doesn't exist",
            });
        }

        // Generate token
        const token = crypto.randomUUID();

        // Update user by adding token and expiration time
        const updatedDetails = await User.findOneAndUpdate(
            { email: email },
            {
                token: token,
                resetPasswordExpires: Date.now() + (10 * 60 * 1000), // 10 minutes
            },
            { new: true }
        );

        // Check if the update was successful
        if (!updatedDetails) {
            return res.status(500).json({
                success: false,
                message: "Error updating user with token",
            });
        }

        // Create URL
        const url = `http://study-notion-drab-phi.vercel.app/update-password/${token}`;

        // Send email containing URL
        const text = `Password reset link is: ${url}. It is valid for 10 minutes only.`;
        await mailSender(email, "Password Reset Link", text);

        // Return response
        return res.status(200).json({
            success: true,
            message: "Password reset link was successfully sent. Please check your email and reset your password as the link will expire in 10 minutes."
        });
    } catch (error) {
        console.log("Error while generating link for resetting password", error);
        return res.status(500).json({
            error: error,
            success: false,
            message: "Error while generating link for resetting password"
        });
    }
};


exports.resetPassword = async (req, res) => {
    try {
        const { password, confirmPassword, token } = req.body;

        if (confirmPassword !== password) {
            return res.status(400).json({
                success: false,
                message: "Password and Confirm Password do not match",
            });
        }

        const userDetails = await User.findOne({ token: token });
        if (!userDetails) {
            return res.status(400).json({
                success: false,
                message: "Token is invalid",
            });
        }

        if (userDetails.resetPasswordExpires < Date.now()) {
            return res.status(403).json({
                success: false,
                message: "Token is expired, please regenerate your token",
            });
        }

        const encryptedPassword = await bcrypt.hash(password, 10);
        const updatedUser = await User.findOneAndUpdate(
            { token: token },
            { password: encryptedPassword, token: null, resetPasswordExpires: null },
            { new: true }
        );

        // Check if the password update was successful
        if (!updatedUser) {
            return res.status(500).json({
                success: false,
                message: "Error updating the password",
            });
        }

        res.json({
            success: true,
            message: "Password reset successful",
        });
    } catch (error) {
        console.log("Error resetting password:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
