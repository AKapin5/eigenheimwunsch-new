export async function sendEmail(
  subject: string,
  message: string
) {
  console.log("EMAIL:", subject);
  console.log(message);

  return {
    success: true,
  };
}