import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Se você se lembrar de outras funções utilitárias que estavam neste arquivo,
// pode adicioná-las aqui também.
