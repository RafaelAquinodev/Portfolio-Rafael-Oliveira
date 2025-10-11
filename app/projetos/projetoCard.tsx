"use client";
import { useState } from "react";
import Image from "next/image";
import { Loader2, ImageOff, Github, ExternalLink, Lock } from "lucide-react";
import { Projeto } from "../types/projetos";

interface ProjetoCardProps {
  projeto: Projeto;
}

export default function ProjetoCard({ projeto }: ProjetoCardProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const hasLiveSite = projeto.siteUrl && projeto.siteUrl !== "#";

  return (
    <div className="h-full overflow-hidden rounded-xl bg-[var(--card)]/80 shadow-[0_5px_0_0_var(--primary-accent)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0px_10px_0_var(--primary-accent)] border border-transparent hover:border-[var(--primary-accent)]/50 flex flex-col">
      {/* Imagem do Projeto */}
      <div className="relative aspect-video bg-[var(--background)]">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-[var(--primary)]" />
          </div>
        )}
        {projeto.imageUrl && !imageError ? (
          <Image
            src={projeto.imageUrl}
            alt={`Imagem do projeto ${projeto.title}`}
            width={500}
            height={281}
            className={`h-full w-full object-contain transition-opacity duration-500 ${
              imageLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setImageLoading(false)}
            onError={() => {
              setImageError(true);
              setImageLoading(false);
            }}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--primary-accent)]/50">
            <ImageOff className="h-12 w-12" />
            <span className="mt-2 text-xs">Imagem indisponível</span>
          </div>
        )}
      </div>

      {/* Informações e Ações */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-bold text-white mb-2">{projeto.title}</h3>
          <p className="text-sm text-[var(--primary-accent)] mb-4">
            {projeto.description}
          </p>
        </div>

        <div className="flex items-center gap-4 mt-auto">
          {/*Caso tenha a url, mostra o repositorio*/}
          {hasLiveSite && (
            <a
              href={projeto.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-transparent border border-[var(--primary-accent)] px-4 py-2 text-center font-semibold text-white transition-colors hover:bg-[var(--primary-accent)]/20"
            >
              <Github size={16} />
              Repositório
            </a>
          )}

          <a
            href={hasLiveSite ? projeto.siteUrl : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-center font-semibold text-white transition-colors ${
              hasLiveSite
                ? "bg-[var(--primary)] hover:bg-[var(--primary-accent)] cursor-pointer"
                : "bg-gray-600 cursor-not-allowed opacity-50 w-full"
            }`}
            onClick={(e) => !hasLiveSite && e.preventDefault()}
          >
            {hasLiveSite ? (
              <>
                <ExternalLink size={16} />
                Acessar
              </>
            ) : (
              <>
                <Lock size={16} />
                Privado
              </>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}
