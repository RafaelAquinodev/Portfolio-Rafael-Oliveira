import { usePathname } from "next/navigation";

const navbarLinks = [
  { label: "Projetos", href: "/projetos", path: "/projetos" },
  { label: "Certificações", href: "/certificados", path: "/certificados" },
  { label: "Contatos", href: "/contatos", path: "/contatos" },
];
const homeLink = { label: "Home", href: "/", path: "/" };

export function useNavbarLinks() {
  const pathname = usePathname();

  function paginaAtual() {
    if (pathname === "/") return "home";
    const linkAtivo = navbarLinks.find((link) =>
      pathname.startsWith(link.path)
    );
    return linkAtivo?.label.toLowerCase() || "home";
  }

  const atual = paginaAtual();

  let links = navbarLinks.filter((link) => link.label.toLowerCase() !== atual);

  if (atual !== "home") {
    links = [homeLink, ...links];
  }

  return links;
}
