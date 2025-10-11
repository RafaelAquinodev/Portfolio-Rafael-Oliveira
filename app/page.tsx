import ProjetosCarrossel from "./_components/projetosCarrossel";
import NavbarContainer from "./_components/navbar";
import Introducao from "./_components/introducao";
import BotaoContato from "./_components/botaoContato";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8 bg-[var(--background)] text-[var(--foreground)]">
      {/* Navbar */}
      <NavbarContainer />
      {/* Main Grid Flexível */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Introducao(Foto do perfil, bio, certificados e cv) */}
        <Introducao />
        {/*Introducao(Projetos e Contatos) */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
          <ProjetosCarrossel />
          <BotaoContato />
        </div>
      </div>
    </main>
  );
}
