// Interface para definir a "forma" de um objeto de certificado
export interface Certificado {
  id: number;
  title: string;
  institution: string;
  date: string;
  imageUrl: string; // Caminho para a imagem do certificado na pasta /public
  credentialUrl: string; // Link para a credencial online (LinkedIn, etc.)
}

// Array com todos os seus certificados
// Para adicionar um novo, basta copiar um bloco {} e alterar as informações.
export const certificadosData: Certificado[] = [
  {
    id: 1,
    title: "Analise e Desenvolvimento de Sistemas",
    institution: "Unigranrio",
    date: "DEZ 2023",
    imageUrl: "/unigranrio.jpg", // Lembre-se de colocar as imagens na pasta /public
    credentialUrl: "#", // Link de exemplo
  },
  {
    id: 2,
    title: "React JS do zero ao avançado",
    institution: "Matheus Fraga - Udemy",
    date: "MAI 2023",
    imageUrl: "/react-certi.jpg", // Lembre-se de colocar as imagens na pasta /public
    credentialUrl:
      "https://www.udemy.com/certificate/UC-fdc1b955-6515-4670-8a13-8127cf0d33c9/", // Link de exemplo
  },
  {
    id: 3,
    title: "NLW Connect - React",
    institution: "Rocketseat",
    date: "FEV 2025",
    imageUrl: "/react.jpg",
    credentialUrl: "",
  },
  {
    id: 4,
    title: "Prompt Engineering",
    institution: "Rocketseat",
    date: "SET 2025",
    imageUrl: "/certi-prompt.jpeg",
    credentialUrl:
      "https://app.rocketseat.com.br/certificates/14fcabf8-2504-4cce-9891-421bd6f0f223", // Use '#' se não tiver um link
  },
  {
    id: 5,
    title: "Otimizando LLMs com RAG",
    institution: "Rocketseat",
    date: "SET 2025",
    imageUrl: "/rag.jpeg",
    credentialUrl:
      "https://app.rocketseat.com.br/certificates/af39aefa-fdfe-4f6f-a7dc-782b9cc3fcf8",
  },
  {
    id: 6,
    title: "Engenharia de Prompt",
    institution: "Rocketseat",
    date: "SET 2025",
    imageUrl: "/prompt.jpeg",
    credentialUrl:
      "https://app.rocketseat.com.br/certificates/76198ec0-4b94-4c08-bc03-0ba7daff5790",
  },
  {
    id: 7,
    title: "Agentes de IA",
    institution: "Rocketseat",
    date: "SET 2025",
    imageUrl: "/agente-ia.jpeg",
    credentialUrl:
      "https://app.rocketseat.com.br/certificates/e9a0cffb-f21b-49aa-a516-8cb9309a2c36",
  },
  {
    id: 8,
    title: "Imersão Agentes IA Gemini",
    institution: "Alura",
    date: "SET 2025",
    imageUrl: "/imersao.jpg",
    credentialUrl:
      "https://cursos.alura.com.br/immersion/certificate/2e10782f-a387-4c44-855c-d2739599130e?lang",
  },

  // Adicione quantos certificados quiser aqui, seguindo o mesmo modelo.
];
