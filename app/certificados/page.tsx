import CertificadoCard from "./certificadoCard";
import BotaoVoltarInicio from "../_components/botaoVoltar";
import NavbarContainer from "../_components/navbar";
import { certificadosData } from "../data/certificado";

export default function CertificacoesPage() {
  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8 bg-[var(--background)] text-[var(--foreground)]">
      <NavbarContainer />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
        {certificadosData.map((cert) => (
          <CertificadoCard key={cert.id} certificado={cert} />
        ))}
      </div>

      <BotaoVoltarInicio />
    </main>
  );
}
