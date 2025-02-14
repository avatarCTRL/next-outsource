import UserContactMailTemplate from "@/components/mailTemplate/UserContactMailTemplate";
import { resend } from "@/libs/resend";
import { UserContactFormData } from "@/types/User";

type ApiResponse = {
  success: boolean;
  message: string;
};

export async function sendEmail(
  data: UserContactFormData & { to: string; subject: string },
): Promise<ApiResponse> {
  const { subject, to } = data;
  try {
    const response = await resend.emails.send({
      from: "Sahaj.inc <onboarding@resend.dev>",
      to,
      subject,
      react: UserContactMailTemplate(data),
    });

    console.log(response);

    if (!response.error) {
      return { success: true, message: "Email sent successfully" };
    } else {
      throw new Error(response.error.message || "Unknown error occurred");
    }
  } catch (emailError) {
    console.error("Error sending verification email ", emailError);
    return { success: false, message: "Failed to send message" };
  }
}
