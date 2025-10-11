import { useState } from "react";
import { toast } from "react-toastify";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function useContactForm(
  initial: FormData = { name: "", email: "", message: "" }
) {
  const [form, setForm] = useState<FormData>(initial);
  const [sending, setSending] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Erro inesperado");
      }
      toast.success("Mensagem enviada com sucesso! 🎉");
      setForm(initial);
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("Erro ao enviar mensagem. Tente novamente.");
      }
    } finally {
      setSending(false);
    }
  }

  return {
    form,
    setForm,
    sending,
    handleChange,
    handleSubmit,
  };
}
