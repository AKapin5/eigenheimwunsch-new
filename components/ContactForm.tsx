"use client";

import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("/api/contact", form);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <textarea name="message" placeholder="Message" onChange={handleChange} />

      <button onClick={handleSubmit}>Send</button>

      {status === "success" && <p>Danke für Ihre Anfrage!</p>}
      {status === "error" && <p>Fehler beim Senden</p>}
    </div>
  );
}