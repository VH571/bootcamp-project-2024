"use client";
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_4vtqidr', 'template_6kyo4w8', form.current, {
          publicKey: '3SIeyrAahGsN1_EgB',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setName('');
            setEmail('');
            setMessage('');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    } else {
      console.log('Form is not referenced.');
    }
  };

  return (
    <main>
      <h1 className="page-title">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          name="user_name"
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          name="user_email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          placeholder="Message"
          required
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </main>
  );
}