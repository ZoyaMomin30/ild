// app/api/send-quote/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Body = { email: string; quantity: string; product: string };

export async function POST(req: Request) {
  try {
    const body: Body = await req.json();
    const { email, quantity, product } = body;

    if (!email || !quantity || !product) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: (process.env.SMTP_SECURE ?? "true") === "true",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      // optional debugging during dev:
      // logger: true,
      // debug: true,
    });

    // verify connection configuration (throws if credentials wrong)
    await transporter.verify();

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM ?? process.env.GMAIL_USER,
      to: process.env.SMTP_TO ?? process.env.GMAIL_USER,
      subject: `Quote request for ${product}`,
      text: `Product: ${product}\nQuantity: ${quantity}\nCustomer email: ${email}`,
      html: `<p><strong>Product:</strong> ${product}</p>
             <p><strong>Quantity:</strong> ${quantity}</p>
             <p><strong>Email:</strong> ${email}</p>`,
    });

    return NextResponse.json({ success: true, info });
  } catch (err: any) {
    console.error("send-quote error:", err);
    return NextResponse.json({ success: false, error: err?.message ?? "Server error" }, { status: 500 });
  }
}
