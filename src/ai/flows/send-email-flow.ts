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
import { contactInfo } from '@/app/data';

const SendEmailInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the person sending the message.'),
  message: z.string().describe('The content of the message.'),
});
export type SendEmailInput = z.infer<typeof SendEmailInputSchema>;

const SendEmailOutputSchema = z.object({
  success: z.boolean(),
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
    // In a real application, you would integrate with an email sending service
    // like SendGrid, Mailgun, or AWS SES here.
    // For this example, we'll just log the email content to the console
    // to simulate that an email has been "sent".
    
    console.log('New Contact Form Submission:');
    console.log(`From: ${input.name} <${input.email}>`);
    console.log(`To: ${contactInfo.email}`);
    console.log('Message:');
    console.log(input.message);

    // Simulate a successful email send.
    return { success: true };
  }
);
