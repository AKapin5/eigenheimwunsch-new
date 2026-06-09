type EmailParams = {
  subject: string;
  html: string;
};

export async function sendEmail({
  subject,
  html,
}: EmailParams) {
  console.log(subject);
  console.log(html);

  return { success: true };
}