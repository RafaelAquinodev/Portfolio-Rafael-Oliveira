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
    title: "Desenvolvimento Full-Stack",
    institution: "Instituição A",
    date: "JUN 2024",
    imageUrl: "/cert-placeholder.png", // Lembre-se de colocar as imagens na pasta /public
    credentialUrl: "https://www.linkedin.com/in/seu-perfil/", // Link de exemplo
  },
  {
    id: 2,
    title: "React Avançado com TypeScript",
    institution: "Instituição B",
    date: "DEZ 2023",
    imageUrl: "/cert-placeholder.png",
    credentialUrl: "#", // Use '#' se não tiver um link
  },
  {
    id: 3,
    title: "Automação com Power Automate",
    institution: "Instituição C",
    date: "SET 2023",
    imageUrl: "/cert-placeholder.png",
    credentialUrl: "#",
  },
  {
    id: 4,
    title: "Fundamentos de IA e Machine Learning",
    institution: "Instituição D",
    date: "MAI 2023",
    imageUrl: "/cert-placeholder.png",
    credentialUrl: "#",
  },
  {
    id: 5,
    title: "Automação com Power Automate",
    institution: "Instituição C",
    date: "SET 2023",
    imageUrl: "/cert-placeholder.png",
    credentialUrl: "#",
  },
  {
    id: 6,
    title: "Fundamentos de IA e Machine Learning",
    institution: "Instituição D",
    date: "MAI 2023",
    imageUrl: "/cert-placeholder.png",
    credentialUrl: "#",
  },
  // Adicione quantos certificados quiser aqui, seguindo o mesmo modelo.
];
