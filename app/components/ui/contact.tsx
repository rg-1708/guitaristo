"use client";
import React, { FormEvent, useState } from "react";

export const Contact = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact");
    } catch (error: any) {}
  };

  return (
    <section id="contact" className="h-80">
      <form onSubmit={onSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
        <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
        <textarea onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type="submit">submit</button>
      </form>
    </section>
  );
};
