import ProjetoCard from "./projetoCard";
import NavbarContainer from "../_components/navbar";
import { projetosData } from "../data/projetos";
import BotaoVoltarInicio from "../_components/botaoVoltar";

export default function ProjetosPage() {
  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8 bg-[var(--background)] text-[var(--foreground)]">
      <NavbarContainer />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
        {projetosData.map((proj) => (
          <ProjetoCard key={proj.id} projeto={proj} />
        ))}
      </div>
      <BotaoVoltarInicio />
    </main>
  );
}
