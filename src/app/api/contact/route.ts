import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { formType, name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail", // Use 'service' instead of 'host' and 'port'
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // Matches your .env.local file
      },
    });

    const subject =
      formType === "volunteer"
        ? "New Volunteer Application"
        : "New Contact Form Submission";

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: subject,
      text: `Form Type: ${formType}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
