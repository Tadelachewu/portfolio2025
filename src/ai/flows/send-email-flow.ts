'use server';
/**
 * @fileOverview A flow for sending an email from the contact form.
 *
 * - sendEmail - A function that handles sending the email.
 * - SendEmailInput - The input type for the sendEmail function.
 * - SendEmailOutput - The return type for the sendEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import nodemailer from 'nodemailer';

const SendEmailInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the person sending the message.'),
  message: z.string().describe('The content of the message.'),
});
export type SendEmailInput = z.infer<typeof SendEmailInputSchema>;

const SendEmailOutputSchema = z.object({
  success: z.boolean(),
  error: z.string().optional(),
});
export type SendEmailOutput = z.infer<typeof SendEmailOutputSchema>;

export async function sendEmail(input: SendEmailInput): Promise<SendEmailOutput> {
  return sendEmailFlow(input);
}

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailInputSchema,
    outputSchema: SendEmailOutputSchema,
  },
  async (input) => {
    console.log('--- Starting sendEmailFlow ---');

    const { name, email, message } = input;
    const toEmail = 'tade2024bdu@gmail.com';

    const emailServerUser = process.env.EMAIL_SERVER_USER;
    const emailServerPassword = process.env.EMAIL_SERVER_PASSWORD;

    if (!emailServerUser) {
      console.error('EMAIL_SERVER_USER environment variable not set.');
      return { success: false, error: 'Server configuration error: Missing email user.' };
    }
     if (!emailServerPassword) {
      console.error('EMAIL_SERVER_PASSWORD environment variable not set.');
      return { success: false, error: 'Server configuration error: Missing email password.' };
    }
    
    console.log(`EMAIL_SERVER_USER is set: ${!!emailServerUser}`);
    console.log(`EMAIL_SERVER_PASSWORD is set: ${!!emailServerPassword}`);


    // Nodemailer transporter setup
    // IMPORTANT: You need to set the EMAIL_SERVER_USER and EMAIL_SERVER_PASSWORD
    // environment variables. For Gmail, you might need to generate an "App Password".
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailServerUser,
        pass: emailServerPassword,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: toEmail,
      subject: `New message from ${name} via your portfolio`,
      text: message,
      html: `
        <p>You have a new contact form submission from your portfolio:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    try {
      console.log('Attempting to send email...');
      const info = await transporter.sendMail(mailOptions);
      console.log(`Email sent successfully to ${toEmail}. Message ID: ${info.messageId}`);
      return { success: true };
    } catch (error: any) {
      console.error('Failed to send email. Error details:', error);
      
      let errorMessage = 'An unknown error occurred while sending the email.';
      if (error.code === 'EAUTH') {
        errorMessage = 'Authentication failed. Please check your EMAIL_SERVER_USER and EMAIL_SERVER_PASSWORD credentials. For Gmail, you may need to use an "App Password".';
      } else if (error.code === 'ECONNECTION') {
        errorMessage = 'Could not connect to the email server. Please check your network connection and server details.';
      } else if (error.message) {
        errorMessage = error.message;
      }

      return { success: false, error: errorMessage };
    }
  }
);
