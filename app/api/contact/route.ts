import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  await sendEmail({
    subject: "Neue Kontaktanfrage",
    html: `
      <h3>Kontaktformular</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Nachricht:</b> ${message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}