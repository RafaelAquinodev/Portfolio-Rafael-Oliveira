import Link from "next/link";

export default function ContatosPage() {
  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8 bg-[var(--background)] text-[var(--foreground)]">
      {/* Cabeçalho da Página */}

      <header className="w-full bg-[var(--card)] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-6 py-4 rounded-xl mb-12 shadow-sm border-b border-[var(--primary-accent)]">
        <span className="font-bold text-xl tracking-wider">
          <span className="text-white">RAFAEL</span>
          <span className="text-[var(--primary)] ml-2">OLIVEIRA</span>
        </span>
        <h1 className="font-black text-3xl sm:text-4xl md:text-5xl text-white order-first md:order-none">
          <span className="text-[var(--primary)]">Contatos</span>
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
            href="/projetos"
          >
            Projetos
          </Link>
          <Link
            className="hover:text-[var(--primary)] transition"
            href="/certificados"
          >
            Certificados
          </Link>
        </nav>
      </header>

      <div>
        <h1>EM BREVE ....</h1>
      </div>
    </main>
  );
}
