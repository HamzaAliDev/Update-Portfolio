import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json() as {
            name: string;
            email: string;
            subject: string;
            message: string;
        };

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: 'nboarding@resend.dev',
            to: process.env.SEND_TO_EMAIL!,
            subject: `New contact form message from ${name}`,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong><br>${message}</p>
            `,
        });

        return NextResponse.json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}