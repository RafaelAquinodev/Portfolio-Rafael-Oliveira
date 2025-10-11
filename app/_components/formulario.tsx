import React from "react";
import { FormularioProps } from "../types/formulario";

export default function Formulario({
  form,
  sending,
  onChange,
  onSubmit,
}: FormularioProps) {
  return (
    <form className="flex-1 flex flex-col gap-4" onSubmit={onSubmit}>
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
        onChange={onChange}
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
        onChange={onChange}
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
        onChange={onChange}
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
  );
}
