import { sendEmail } from "@/helpers/sendEmail";

export async function POST(request: Request) {
  const { username, address, email, message } = await request.json();
  const adminEmail = process.env.ADMIN_EMAIL;

  try {
    const mailResponse = await sendEmail({
      username,
      address,
      email,
      message,
      to: adminEmail,
      subject: "Outsource Contact Form",
    });

    if (mailResponse.success)
      return Response.json(mailResponse, { status: 201 });
    else throw new Error(mailResponse.message);
  } catch (error) {
    console.log("Error adding messages ", error);
    return Response.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 },
    );
  }
}
