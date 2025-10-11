"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import ElectricBorder from "@/components/ElectricBorder";
import projetosCards from "../data/projetosCard";

export default function ProjetosCarrossel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

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
    <div className="bg-[var(--card)]/80 rounded-lg p-4 md:p-4 flex flex-col items-center justify-between shadow-md w-full md:max-w-max h-full md:max-h-[475px]  border border-[var(--primary-accent)]">
      <h2 className="font-semibold text-lg mb-4 text-[var(--primary)] text-center w-full">
        Projetos em Destaque
      </h2>

      <Carousel setApi={setApi} className="w-full max-w-md">
        <CarouselContent>
          {projetosCards.map((projeto, idx) => (
            <CarouselItem key={idx} className="flex justify-center">
              <div className="p-4 bg-[var(--card)] rounded-xl flex flex-col items-center w-[90%]">
                <Link href="/projetos" passHref>
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
                      className="object-contain rounded-md border border-[var(--primary)] mb-2 transition-transform duration-1000 ease-in-out hover:scale-105 cursor-pointer"
                    />
                  </ElectricBorder>
                </Link>

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
      </Carousel>

      {/* Navegaçao de 'bolinha'*/}
      <div className="flex items-center justify-center gap-2 mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index + 1
                ? "w-4 bg-[var(--primary)]"
                : "w-2 bg-[var(--primary-accent)]/50"
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
