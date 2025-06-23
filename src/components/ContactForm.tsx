"use client"
import { useState } from "react";
import { Send } from "lucide-react";

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const initialState: ContactFormState = { name: "", email: "", subject: "", message: "", };
export default function ContactForm() {
  const [state, setState] = useState<ContactFormState>(initialState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let { name, email, subject, message } = state;
    name = name.trim();
    email = email.trim();
    subject = subject.trim();
    message = message.trim();


    if (!name || !email || !subject || !message) return alert("Please fill in all fields.");
    if (name.length < 3) return alert("Enter a Valid Name");
    if (subject.length < 3) return alert("Enter a Valid Subject");
    if (message.length < 3) return alert("Message must be at least 3 characters long.");
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) return alert("Please enter a valid email address.")
    if (message.length > 500) return alert("Message must be less than 500 characters long.");

    const data: ContactFormState = {
      name,
      email,
      subject,
      message,
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setState(initialState);
      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again later.");
    }
  };
  return (
    <div className="relative rounded-xl bg-white p-8 shadow-md dark:bg-gray-800/50 dark:backdrop-blur-sm">
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 opacity-20 blur-xl"></div>
      <h2 className="mb-6 text-2xl font-bold">Send Me a Message</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={state.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-purple-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-purple-500"
              placeholder="Your email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={state.subject}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-purple-500"
            placeholder="Subject"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            name="message"
            value={state.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-purple-500"
            placeholder="Your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center w-full rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:from-purple-700 hover:to-fuchsia-700 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800"
        >
          <Send className="mr-2 h-4 w-4" /> Send Message
        </button>
      </form>
    </div>
  )
}
