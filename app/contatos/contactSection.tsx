"use client";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { toast } from "react-toastify";

export default function ContactSection() {
  // Estado dos campos:
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  // Handler de mudança:
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  // Envio do formulário:
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api", {
        // Corrija o endpoint se precisar!
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Erro inesperado");
      }
      toast.success("Mensagem enviada com sucesso! 🎉");
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      toast.error(err.message || "Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setSending(false);
    }
  }
  return (
    <section className="w-full max-w-4xl mx-auto mt-8 bg-[var(--card)]/80 rounded-xl shadow-lg border border-[var(--primary-accent)] p-6 md:p-10 flex flex-col md:flex-row gap-8">
      {/* ...Lado esquerdo: informações de contato... */}
      <div className="flex-1 flex flex-col justify-between gap-6">
        {/* ...Todo o seu código igual... */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-2">
            Vamos conversar!
          </h2>
          <p className="text-[var(--foreground)] mb-6">
            Estou disponível para{" "}
            <span className="font-bold text-[var(--primary)]">
              novos projetos
            </span>{" "}
            e oportunidades.
            <br />
            Entre em contato pelo formulário ou meus canais sociais.
          </p>
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-[var(--primary-accent)]/20 text-[var(--primary-accent)] p-2 rounded-lg">
              <FaEnvelope size={20} />
            </div>
            <span className="text-[var(--foreground)] select-all">
              aquinorafaeldev@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[var(--primary-accent)]/20 text-[var(--primary-accent)] p-2 rounded-lg">
              <FaPhone size={20} />
            </div>
            <span className="text-[var(--foreground)]">+55 2198620-1642</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[var(--primary-accent)]/20 text-[var(--primary-accent)] p-2 rounded-lg">
              <FaMapMarkerAlt size={20} />
            </div>
            <span className="text-[var(--foreground)]">
              Rio de Janeiro, Brasil
            </span>
          </div>
        </div>
        <div className="flex gap-3 mt-auto">
          <a
            href="mailto:aquinorafaeldev@gmail.com"
            className="bg-[var(--primary-accent)]/20 hover:bg-[var(--primary-accent)]/30 transition text-[var(--primary-accent)] p-2 rounded-lg"
            title="Enviar e-mail"
          >
            <FaEnvelope size={22} />
          </a>
          <a
            href="https://github.com/RafaelAquinodev"
            target="_blank"
            rel="noopener"
            className="bg-[var(--primary-accent)]/20 hover:bg-[var(--primary-accent)]/30 transition text-[var(--primary-accent)] p-2 rounded-lg"
            title="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/rafaeloliveira00/"
            target="_blank"
            rel="noopener"
            className="bg-[var(--primary-accent)]/20 hover:bg-[var(--primary-accent)]/30 transition text-[var(--primary-accent)] p-2 rounded-lg"
            title="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>

      {/* --- DIREITA: Formulário --- */}
      <form className="flex-1 flex flex-col gap-4" onSubmit={handleSubmit}>
        <label
          className="font-semibold text-[var(--primary)]"
          htmlFor="contact-name"
        >
          Nome
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="Seu nome"
          value={form.name}
          onChange={handleChange}
          autoComplete="off"
          className="rounded-md bg-transparent border border-[var(--primary-accent)]/40 px-4 py-2 text-[var(--foreground)] placeholder:text-[var(--primary-accent)]/50 transition focus:border-[var(--primary-accent)] focus:outline-none"
          required
        />

        <label
          className="font-semibold text-[var(--primary)]"
          htmlFor="contact-email"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="seu@email.com"
          value={form.email}
          onChange={handleChange}
          autoComplete="off"
          className="rounded-md bg-transparent border border-[var(--primary-accent)]/40 px-4 py-2 text-[var(--foreground)] placeholder:text-[var(--primary-accent)]/50 transition focus:border-[var(--primary-accent)] focus:outline-none"
          required
        />

        <label
          className="font-semibold text-[var(--primary)]"
          htmlFor="contact-message"
        >
          Mensagem
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="Digite sua mensagem..."
          value={form.message}
          onChange={handleChange}
          maxLength={200}
          className="rounded-md bg-transparent border border-[var(--primary-accent)]/40 px-4 py-2 text-[var(--foreground)] placeholder:text-[var(--primary-accent)]/50 transition resize-none focus:border-[var(--primary-accent)] focus:outline-none"
          required
        />

        <button
          type="submit"
          className="mt-2 bg-[var(--primary-accent)] text-[var(--background)] font-bold rounded-md py-3 shadow-md hover:brightness-125 transition"
          disabled={sending}
        >
          {sending ? "Enviando..." : "Enviar Mensagem"}
        </button>
      </form>
    </section>
  );
}
