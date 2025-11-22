const { contactUsEmail } = require("../mail/templates/contactFormRes");
const mailSender = require("../utils/mailSender")
require("dotenv").config;
exports.contactUsController = async (req, res) => {
    try {
        const { email, firstName, lastName, message, phoneNo, countrycode } = req.body
        const emailRes = await mailSender(
            email,
            "We have recived whats on your mind. || StudyNotion.",
            contactUsEmail(email, firstName, lastName, message, phoneNo, countrycode)
        )
        console.log("Email Res: ", emailRes)
        return res.json({
            success: true,
            message: "Email send successfully",
        })
    } catch (error) {
        console.log("Error", error)
        console.log("Error message :", error.message)
        return res.status(500).json({
            success: false,
            message: "Something went wrong...",
        });
    }
}

