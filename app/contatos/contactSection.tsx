"use client";

import Formulario from "../_components/formulario";
import NavbarContainer from "../_components/navbar";
import RedeSocial from "../_components/redeSocial";
import useContactForm from "./_hooks/useContatos";

export default function ContactSection() {
  const { form, sending, handleChange, handleSubmit } = useContactForm();

  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8 bg-[var(--background)] text-[var(--foreground)]">
      <NavbarContainer />
      <section className="w-full max-w-4xl mx-auto mt-8 bg-[var(--card)]/80 rounded-xl shadow-lg border border-[var(--primary-accent)] p-6 md:p-10 flex flex-col md:flex-row gap-8">
        <RedeSocial />
        <Formulario
          form={form}
          sending={sending}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </section>
    </main>
  );
}
