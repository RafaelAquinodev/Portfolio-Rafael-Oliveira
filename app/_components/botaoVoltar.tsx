import Link from "next/link";

export default function BotaoVoltarInicio() {
  return (
    <div className="text-center mt-12">
      <Link
        href="/"
        className="bg-[var(--card)]/80 hover:bg-[var(--card)] text-white rounded-full px-8 py-3 font-semibold shadow transition border border-[var(--primary-accent)]/50 hover:border-[var(--primary-accent)]"
      >
        Voltar para o Início
      </Link>
    </div>
  );
}
