"use client";
import { useState } from "react";
import Image from "next/image";

import { Loader2, ImageOff } from "lucide-react"; // Ícones para loading e erro
import { Certificado } from "./certificados";

interface CertificadoCardProps {
  certificado: Certificado;
}

export default function CertificadoCard({ certificado }: CertificadoCardProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className="overflow-hidden rounded-xl bg-[var(--card)]/80 shadow-[0_5px_0_0_var(--primary-accent)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0px_10px_0_var(--primary-accent)] border border-transparent hover:border-[var(--primary-accent)]/50">
      {/* Imagem do Certificado */}
      <div className="relative aspect-video bg-[var(--background)]">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-[var(--primary)]" />
          </div>
        )}

        {!imageError ? (
          <Image
            src={certificado.imageUrl}
            alt={`Certificado de ${certificado.title}`}
            width={500}
            height={281}
            className={`h-full w-full object-cover transition-opacity duration-500 ${
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

      {/* Informações */}
      <div className="p-4 flex flex-col justify-between h-48">
        <div>
          <h3 className="truncate text-lg font-bold text-white mb-2">
            {certificado.title}
          </h3>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex justify-between">
              <span className="text-[var(--primary-accent)]">Instituição:</span>
              <span className="font-semibold">{certificado.institution}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--primary-accent)]">Emissão:</span>
              <span className="font-semibold">{certificado.date}</span>
            </div>
          </div>
        </div>

        <a
          href={certificado.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-lg bg-[var(--primary)] px-4 py-2 text-center font-semibold text-white transition-colors hover:bg-[var(--primary-accent)] mt-4"
        >
          Ver Credencial
        </a>
      </div>
    </div>
  );
}
