import Link from "next/link";
import { certificadosData } from "./certificados";
import CertificadoCard from "./certificadoCard";

export default function CertificacoesPage() {
  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8 bg-[var(--background)] text-[var(--foreground)]">
      {/* Cabeçalho da Página */}
      <div className="text-center mb-12">
        <h1 className="font-black text-4xl md:text-5xl text-white">
          Minhas <span className="text-[var(--primary)]">Certificações</span>
        </h1>
        <p className="text-[var(--primary-accent)] mt-2 max-w-2xl mx-auto">
          Jornada de aprendizado contínuo e especialização nas tecnologias mais
          modernas do mercado.
        </p>
      </div>

      {/* Grid Responsivo de Certificados */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
        {certificadosData.map((cert) => (
          <CertificadoCard key={cert.id} certificado={cert} />
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
