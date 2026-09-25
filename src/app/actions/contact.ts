"use server";

export async function submitContactForm(prevState: unknown, formData: FormData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const privacy = formData.get("privacy");

    // Basic validation
    if (!name || !email || !phone || !message || !privacy) {
      return { success: false, message: "Please fill out all required fields." };
    }

    // Simulate network delay for sending email
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Here you would integrate with Resend, Nodemailer, or your SMTP provider.
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'Acme <onboarding@resend.dev>',
    //   to: ['info@ainzara.ly'],
    //   subject: `New Inquiry from ${name}`,
    //   html: `<p><strong>Name:</strong> ${name}</p>...`
    // });

    console.log("Form submitted successfully:", { name, email, phone, message });

    return { success: true, message: "Your message has been sent successfully! We will contact you soon." };
  } catch (error) {
    console.error("Failed to submit form:", error);
    return { success: false, message: "Failed to send message. Please try again or contact us via WhatsApp." };
  }
}
