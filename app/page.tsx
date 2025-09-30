import Image from "next/image";
import ProjetosCarrossel from "./_components/projetos";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8 bg-[var(--background)] text-[var(--foreground)]">
      {/* Navbar */}
      <header className="w-full bg-[var(--card)] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-8 py-4 rounded-xl mb-8 shadow-sm border-b border-[var(--primary-accent)]">
        <span className="font-bold text-xl tracking-wider">
          <span className="text-white">RAFAEL</span>
          <span className="text-[var(--primary)] ml-2">OLIVEIRA</span>
        </span>
        <nav className="flex flex-wrap justify-center space-x-6 font-semibold">
          <a
            className="hover:text-[var(--primary)] transition"
            href="#projects"
          >
            Projetos
          </a>
          <a className="hover:text-[var(--primary)] transition" href="#about">
            Certificações
          </a>
          <a className="hover:text-[var(--primary)] transition" href="#contact">
            Contatos
          </a>
        </nav>
      </header>

      {/* Main Grid Flexível */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Coluna Esquerda (2/3 da tela no desktop) */}
        <div className="w-full lg:w-2/3">
          <section className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 items-start">
            {/* Foto Perfil */}
            <div className="rounded-[24px] flex items-center justify-center bg-[var(--card)]/80 shadow-md max-w-[300px] mx-auto md:mx-0">
              <Image
                src="/foto-perfil.jpg"
                alt="Foto de perfil de Rafael Oliveira"
                width={300}
                height={400}
                className="object-cover rounded-[24px] w-full h-auto lg:h-[400px]"
                priority
              />
            </div>

            {/* Bio */}
            <div className="bg-[var(--card)]/80 rounded-lg p-8 flex flex-col justify-center lg:h-[400px] border-l-4 border-[var(--primary)] shadow-sm">
              <h1 className="font-black text-3xl md:text-4xl leading-tight mb-6 text-white">
                Desenvolvedor Full Stack
                <br />
                <span className="text-[var(--primary)]">Soluções de IA</span>
                <br />
                <span className="text-[var(--primary-accent)]">
                  Automações com RPA
                </span>
              </h1>
              <p className="text-base text-[var(--primary-accent)]">
                Sou Desenvolvedor de Software com formação em Análise e
                Desenvolvimento de Sistemas e pós-graduando em Desenvolvimento
                Full-Stack. Atuo no desenvolvimento de aplicações web modernas,
                escaláveis e centradas na experiência do usuário, com expertise
                em ReactJS, Next.js, TypeScript e TailwindCSS, além de criar
                soluções de automação inteligente com Power Automate. Tenho
                experiência comprovada em projetos envolvendo Inteligência
                Artificial, Automação de Processos e desenvolvimento de
                plataformas SaaS.
              </p>
            </div>

            {/* Card Certificações */}
            <div className="bg-[var(--card)]/70 rounded-lg p-4 flex flex-col gap-4 items-start text-[var(--foreground)] shadow-sm border-l-2 border-[var(--primary-accent)]">
              <p className="text-base text-[var(--secondary)]">
                Quer saber mais sobre minhas qualificações e especializações?
                <br />
                Confira todas as{" "}
                <span className="text-[var(--primary)] font-medium">
                  certificações
                </span>{" "}
                que obtive ao longo da minha carreira!
              </p>
              <a
                href="/certificacoes"
                className="bg-[var(--primary)]/90 hover:bg-[var(--primary)] text-white rounded-full px-6 py-2 font-semibold shadow transition "
              >
                Ver certificações
              </a>
            </div>

            {/* Card Baixar CV */}
            <div className="bg-[var(--primary)]/80 rounded-lg p-8 flex flex-col justify-center items-center text-center shadow-[var(--shadow)] lg:h-[180px] lg:justify-between">
              <p className="text-base text-white text-center mb-4">
                Buscando um desenvolvedor apaixonado por{" "}
                <span className="font-bold text-[var(--background)]">
                  Inteligencia Artifical,
                </span>{" "}
                <span className="font-bold text-[var(--background)]">
                  Automações
                </span>{" "}
                <span className="font-bold text-[var(--background)]">
                  ou Desenvolvimento de Software
                </span>
                ?<br />
                Conheça meu histórico e competências completas!
              </p>
              <a
                href="/Rafael_Oliveira_CV.pdf" // Lembre-se de usar o nome correto do seu arquivo
                download
                // 2. Adicione as classes flex e o componente do ícone
                className="bg-white text-[var(--primary)] font-bold px-6 py-2 rounded-lg shadow transition-all border border-transparent hover:bg-[var(--background)] hover:text-white hover:border-[var(--primary)] flex items-center gap-2"
              >
                <FiDownload size={20} /> {/* Ícone adicionado aqui */}
                Baixar CV
              </a>
            </div>
          </section>
        </div>

        {/* Coluna da Direita (1/3 da tela no desktop) */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
          <ProjetosCarrossel />

          <div className="bg-[var(--card)]/60 rounded-lg p-6  flex flex-col justify-center items-center gap-3 shadow border-t border-[var(--primary-accent)] lg:h-[100px]">
            <span className="font-bold text-[var(--primary-accent)] mb-1">
              Conecte-se comigo:
            </span>
            <div className="flex gap-4 flex-wrap justify-center">
              {/* Botão GitHub */}
              <a
                href="https://github.com/RafaelAquinodev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-transparent border border-[var(--primary-accent)] text-[var(--foreground)] px-4 py-2 rounded-full font-semibold shadow hover:bg-[var(--primary)]/70 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.07 3.29 9.37 7.86 10.88.58.1.78-.25.78-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.3-1.68-1.3-1.68-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.04 1.78 2.72 1.27 3.38.97.11-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.5.11-3.13 0 0 .97-.31 3.18 1.19.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.5 3.18-1.19 3.18-1.19.63 1.63.23 2.83.11 3.13.75.81 1.2 1.84 1.2 3.1 0 4.43-2.68 5.41-5.23 5.7.43.37.81 1.09.81 2.2 0 1.6-.02 2.89-.02 3.28 0 .31.2.67.79.56C20.72 21.37 24 17.07 24 12c0-6.27-5.22-11.5-12-11.5z" />
                </svg>
                GitHub
              </a>
              {/* Botão LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rafaeloliveira00/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-transparent border border-[var(--primary-accent)] text-[var(--foreground)] px-4 py-2 rounded-full font-semibold shadow hover:bg-[var(--primary)]/70 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.967 0-1.75-.784-1.75-1.75s.783-1.75 1.75-1.75c.968 0 1.75.784 1.75 1.75s-.782 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.065-1.867-3.065-1.869 0-2.156 1.458-2.156 2.967v5.702h-3v-10h2.884v1.367h.041c.402-.758 1.384-1.557 2.848-1.557 3.045 0 3.606 2.004 3.606 4.611v5.579z" />
                </svg>
                LinkedIn
              </a>
              {/* Botão WhatsApp */}
              <a
                href="https://wa.me/5521986201642"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-transparent border border-[var(--primary-accent)] text-[var(--foreground)] px-4 py-2 rounded-full font-semibold shadow hover:bg-[var(--primary)]/70 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.149-.197.297-.768.966-.941 1.164-.173.199-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.789-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.915-2.206-.242-.579-.487-.5-.669-.509-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.366.679.234 1.21.372 1.624.476.682.173 1.304.148 1.796.09.548-.065 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.416-.074-.127-.273-.198-.57-.347zm-5.421 7.118h-.002a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.656-.235-.375a9.86 9.86 0 01-1.514-5.303C1.197 6.432 6.163 1.5 12 1.5c2.653 0 5.152 1.037 7.03 2.918A9.847 9.847 0 0122.5 12c0 5.838-4.964 10.8-10.793 10.8zm8.413-19.214A11.815 11.815 0 0012 0C5.383 0 0 5.382 0 12c0 2.109.555 4.177 1.604 5.988L0 24l6.177-1.646A11.874 11.874 0 0012 24c6.617 0 12-5.383 12-12 0-3.192-1.245-6.192-3.536-8.714z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
