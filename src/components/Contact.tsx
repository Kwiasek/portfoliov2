"use client";
import { FormEvent, useRef } from "react";
import { SectionHeader } from "./SectionHeader";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    console.log(form);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        "template_bs476xm",
        form.current!,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          toast.success("Email sent successfully!");
          if (form.current) form.current.reset();
        },
        (error) => {
          console.error("Error sending email:", error);
          toast.error("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <>
      <section id="contact" className="mb-16">
        <SectionHeader>Contact Me</SectionHeader>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-3 p-5 rounded-xl myShadow border min-w-450px max-w-[700px] mx-auto"
          autoComplete="true"
        >
          <label className="text-lg">Name</label>
          <input
            type="text"
            name="user_name"
            className="w-full indent-2 px-3 py-2 border-none rounded-lg bg-background text-white"
            placeholder="Your name"
            minLength={3}
            maxLength={30}
            required
          />
          <label className="text-lg">Email</label>
          <input
            type="email"
            name="user_email"
            className="w-full indent-2 px-3 py-2 border-none rounded-lg bg-background text-white"
            placeholder="Your email"
            required
          />
          <label className="text-lg">Message</label>
          <textarea
            name="message"
            placeholder="What you want to tell me..."
            className="w-full indent-2 px-3 py-2 border-none rounded-lg bg-background text-white min-h-12"
            rows={5}
            minLength={20}
            maxLength={250}
            required
          />
          <input
            type="submit"
            value="Send"
            className="mt-5 px-3 py-2 bg-primary text-slate-900 w-full rounded-lg"
          />
        </form>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
