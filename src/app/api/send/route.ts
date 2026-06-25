import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { render, pretty } from "@react-email/render";
import { prisma } from "@/lib/db/prisma";
import { EmailTemplate } from "@/components/template/Email";

export async function POST(request: Request) {
  const body = await request.json();
  const { senderName, senderEmail, reasonToContact, senderMsg } = body;

  if (
    !senderName ||
    !senderEmail ||
    !reasonToContact ||
    !senderMsg ||
    typeof senderName !== "string" ||
    typeof senderEmail !== "string" ||
    typeof reasonToContact !== "string" ||
    typeof senderMsg !== "string"
  ) {
    return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
  }

  try {

    const submission = await prisma.contactSubmission.create({
      data: {
        name: senderName,
        email: senderEmail,
        reason: reasonToContact,
        message: senderMsg,
      },
    });

    // 2. Generate email HTML
    const htmlContent = await pretty(
      await render(
        EmailTemplate({
          userName: senderName,
          contactReason: reasonToContact,
          userMessage: senderMsg,
        })
      )
    );

    // 3. Setup transporter with Gmail + App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: 'workwithjyotishman@gmail.com',
        pass: 'edmprkabkydqygbu'
      },
    });

    // 4. Send email to the user who filled the form
    await transporter.sendMail({
      from: `"Resume@Jyotishman-Pathak" <${process.env.EMAIL_FROM}>`,
      to: `${senderName} <${senderEmail}>`,
      subject: "Your message has landed! 🚀 We'll get back to you shortly",
      html: htmlContent,
    });

    // 5. Send notification email to YOU (the portfolio owner)
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_FROM}>`,
      to: "jyotishmanpathak.work@gmail.com", // Your email
      subject: `New Contact Submission from ${senderName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${senderName}</p>
        <p><strong>Email:</strong> ${senderEmail}</p>
        <p><strong>Reason:</strong> ${reasonToContact}</p>
        <p><strong>Message:</strong></p>
        <p>${senderMsg}</p>
      `,
    });

    // 6. Mark as processed
    await prisma.contactSubmission.update({
      where: { id: submission.id },
      data: { isProcessed: true },
    });

    return NextResponse.json(
      {
        message: `Email sent to ${senderEmail} successfully`,
        submissionId: submission.id,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error processing contact form:", err);
    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  }
}
