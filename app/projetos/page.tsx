import Link from "next/link";
import { projetosData } from "./projetos";
import ProjetoCard from "./projetoCard";

export default function ProjetosPage() {
  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8 bg-[var(--background)] text-[var(--foreground)]">
      {/* Cabeçalho da Página */}

      <header className="w-full bg-[var(--card)] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-6 py-4 rounded-xl mb-12 shadow-sm border-b border-[var(--primary-accent)]">
        <span className="font-bold text-xl tracking-wider">
          <span className="text-white">RAFAEL</span>
          <span className="text-[var(--primary)] ml-2">OLIVEIRA</span>
        </span>
        <h1 className="font-black text-3xl sm:text-4xl md:text-5xl text-white order-first md:order-none">
          <span className="text-[var(--primary)]">Projetos</span>
        </h1>
        <nav className="flex flex-wrap justify-center space-x-4 md:space-x-6 font-semibold">
          <Link
            className="hover:text-[var(--primary)] transition"
            href="/" // Usando Link do Next.js para navegação interna
          >
            Home
          </Link>
          <Link
            className="hover:text-[var(--primary)] transition"
            href="/certificados"
          >
            Certificações
          </Link>
          <Link
            className="hover:text-[var(--primary)] transition"
            href="/contatos"
          >
            Contatos
          </Link>
        </nav>
      </header>

      {/* Grid Responsivo de Projetos */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
        {projetosData.map((proj) => (
          <ProjetoCard key={proj.id} projeto={proj} />
        ))}
      </div>

      {/* Botão para voltar */}
      <div className="text-center mt-12">
        <Link
          href="/"
          className="bg-[var(--card)]/80 hover:bg-[var(--card)] text-white rounded-full px-8 py-3 font-semibold shadow transition border border-[var(--primary-accent)]/50 hover:border-[var(--primary-accent)]"
        >
          Voltar para o Início
        </Link>
      </div>
    </main>
  );
}
