import nodemailer from "nodemailer"

export const sendMailer = async (to, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_SMTP_HOST,
            port: process.env.MAILTRAP_SMTP_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.MAILTRAP_SMTP_USER,
                pass: process.env.MAILTRAP_SMTP_PASS,
            },
        });

        const info = await transporter.sendMailer({
            from: 'Inngest TMS',
            to,
            subject,
            text, // plain‑text body
        });

        console.log("Message sent:", info.messageId);
        return info
    } catch (error) {
        console.error("mail error ", error,message)
        throw  error 
    }
}