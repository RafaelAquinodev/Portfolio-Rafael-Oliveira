import Image from "next/image";
import { FiDownload } from "react-icons/fi";

export default function Introducao() {
  return (
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
            Software Developer
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
            escaláveis e centradas na experiência do usuário, com expertise em
            ReactJS, Next.js, TypeScript e TailwindCSS, além de criar soluções
            de automação inteligente com Power Automate. Tenho experiência
            comprovada em projetos envolvendo Inteligência Artificial, Automação
            de Processos e desenvolvimento de plataformas SaaS.
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
            href="/certificados"
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
              Inteligência Artifical,
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
            href="/Rafael_A_Oliveira_CV.pdf"
            download
            className="bg-white text-[var(--primary)] font-bold px-6 py-2 rounded-lg shadow transition-all border border-transparent hover:bg-[var(--background)] hover:text-white hover:border-[var(--primary)] flex items-center gap-2"
          >
            <FiDownload size={20} />
            Baixar CV
          </a>
        </div>
      </section>
    </div>
  );
}
