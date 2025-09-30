// Interface para definir a "forma" de um objeto de projeto
export interface Projeto {
  id: number;
  title: string;
  description: string;
  imageUrl: string; // Caminho para a imagem do projeto na pasta /public
  githubUrl: string; // Link para o repositório no GitHub
  siteUrl: string; // Link para o site/demo ao vivo
}

// Array com todos os seus projetos
// Para adicionar um novo, basta copiar um bloco e alterar as informações.
export const projetosData: Projeto[] = [
  {
    id: 1,
    title: "Metrics Nfts",
    description:
      "O Metrics NFT é uma plataforma web (SaaS) desenvolvida em Next.js que oferece ferramentas avançadas para monitoramento e análise de carteiras de NFTs na blockchain Ethereum",
    imageUrl: "/nft.jpg",
    githubUrl: "https://github.com/RafaelAquinodev/concurso-fsc-nft",
    siteUrl: "https://metrics-nft.vercel.app/",
  },
  {
    id: 2,
    title: "Radar competencia IA",
    description:
      "Quiz interativo de 8 perguntas que mapeia sua proficiência em ferramentas de IA, revelando oportunidades de automação e crescimento profissional.",
    imageUrl: "/radar-ia.jpg",
    githubUrl:
      "https://github.com/RafaelAquinodev/questionario-radar-competencia-ia",
    siteUrl: "https://questionario-radar-competencia-ia.vercel.app/",
  },
  {
    id: 3,
    title: "Quiz Perfil Profissional IA",
    description:
      "Versão anterior do meu portfólio, desenvolvida com React e animações em Framer Motion para uma experiência fluida.",
    imageUrl: "/perfil-profissional.jpg",
    githubUrl: "https://github.com/seu-usuario/portfolio-v1",
    siteUrl: "https://quiz-perfil-profissional-ia.vercel.app/",
  },
  {
    id: 4,
    title: "Quiz Maturidade IA",
    description:
      "Uma plataforma SaaS que utiliza IA para análise preditiva de dados, com gráficos interativos e relatórios em tempo real.",
    imageUrl: "/maturidade-ia.jpg", // Coloque a imagem na pasta /public
    githubUrl: "https://github.com/seu-usuario/dashboard-ia",
    siteUrl: "https://maturidadequiz-ia.vercel.app/", // Use '#' se não houver site ao vivo
  },
  {
    id: 5,
    title: "VisionXdoc",
    description:
      "Versão anterior do meu portfólio, desenvolvida com React e animações em Framer Motion para uma experiência fluida.",
    imageUrl: "/vision.jpg",
    githubUrl: "https://github.com/seu-usuario/portfolio-v1",
    siteUrl: "#",
  },
  {
    id: 6,
    title: "CDN-IA",
    description:
      "Versão anterior do meu portfólio, desenvolvida com React e animações em Framer Motion para uma experiência fluida.",
    imageUrl: "/nft.jpg",
    githubUrl: "https://github.com/seu-usuario/portfolio-v1",
    siteUrl: "#",
  },
  // Adicione quantos projetos quiser aqui...
];
