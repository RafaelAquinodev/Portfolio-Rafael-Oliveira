"use client";
import * as React from "react"; // Importar React completo para usar os hooks
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi, // Importar o tipo da API do carrossel
} from "@/components/ui/carousel";
import ElectricBorder from "@/components/ElectricBorder";
import Image from "next/image";

const projetos = [
  {
    image: "/nft.jpg",
    alt: "Dashboard de IA",
    title: "Dashboard de IA",
    description:
      "Painel interativo com análise preditiva, alertas inteligentes e visualização de dados de ML em tempo real.",
  },
  {
    image: "/automacao.jpg",
    alt: "Automatizador de Processos",
    title: "Automatizador de Processos",
    description:
      "Automação personalizada de fluxos de trabalho, integração com RPA e geração automática de relatórios.",
  },
  {
    image: "/portfolio.jpg",
    alt: "Portfólio Moderno",
    title: "Portfólio Moderno",
    description:
      "Site pessoal com design responsivo, animações suaves, integrações inteligentes e dark mode.",
  },
];

export default function ProjetosCarrossel() {
  // 1. Hooks para controlar o estado do carrossel
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // 2. Efeito para sincronizar o estado do React com o estado interno do carrossel
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="bg-[var(--card)]/80 rounded-lg p-4 md:p-8 flex flex-col items-center justify-between shadow-md w-full h-full border border-[var(--primary-accent)]">
      <h2 className="font-semibold text-lg mb-4 text-[var(--primary)] text-center w-full">
        Projetos em Destaque
      </h2>

      {/* 3. Passar a função `setApi` para o componente Carousel */}
      <Carousel setApi={setApi} className="w-full max-w-md">
        <CarouselContent>
          {projetos.map((projeto, idx) => (
            <CarouselItem key={idx} className="flex justify-center">
              <div className="p-4 bg-[var(--card)] rounded-xl flex flex-col items-center w-[90%]">
                <ElectricBorder
                  className="p-2"
                  color="#9d2ef8ff"
                  speed={1}
                  chaos={0.5}
                  thickness={4}
                  style={{ borderRadius: 16 }}
                >
                  <Image
                    src={projeto.image}
                    alt={projeto.alt}
                    width={320}
                    height={160}
                    className="object-contain rounded-md border border-[var(--primary)] mb-2"
                  />
                </ElectricBorder>
                <h3 className="font-bold text-[var(--primary)] text-lg mt-4 text-center">
                  {projeto.title}
                </h3>
                <p className="text-[var(--foreground)] text-center mt-2 text-sm sm:text-base">
                  {projeto.description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* 4. REMOVIDO: As setas <CarouselPrevious> e <CarouselNext> foram retiradas */}
      </Carousel>

      {/* 5. ADICIONADO: A nova navegação por "bolinhas" (dots) */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index + 1
                ? "w-4 bg-[var(--primary)]" // Estilo do dot ativo
                : "w-2 bg-[var(--primary-accent)]/50" // Estilo do dot inativo
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
