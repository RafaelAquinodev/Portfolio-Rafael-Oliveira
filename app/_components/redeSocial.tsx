import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export default function RedeSocial() {
  return (
    <div className="flex-1 flex flex-col justify-between gap-6">
      <div>
        <h2 className="text-2xl font-bold text-[var(--primary)] mb-2">
          Vamos conversar!
        </h2>
        <p className="text-[var(--foreground)] mb-6">
          Entre em contato{" "}
          <span className="font-bold text-[var(--primary)]">
            pelo formulário
          </span>{" "}
          ou meus canais sociais.
          <br />
        </p>
      </div>
      <div className="flex flex-col gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-[var(--primary-accent)]/20 text-[var(--primary-accent)] p-2 rounded-lg">
            <FaEnvelope size={20} />
          </div>
          <span className="text-[var(--foreground)] select-all">
            aquinorafaeldev@gmail.com
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-[var(--primary-accent)]/20 text-[var(--primary-accent)] p-2 rounded-lg">
            <FaPhone size={20} />
          </div>
          <span className="text-[var(--foreground)]">+55 2198620-1642</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-[var(--primary-accent)]/20 text-[var(--primary-accent)] p-2 rounded-lg">
            <FaMapMarkerAlt size={20} />
          </div>
          <span className="text-[var(--foreground)]">
            Rio de Janeiro, Brasil
          </span>
        </div>
      </div>
      <div className="flex gap-3 mt-auto">
        <a
          href="mailto:aquinorafaeldev@gmail.com"
          className="bg-[var(--primary-accent)]/20 hover:bg-[var(--primary-accent)]/30 transition text-[var(--primary-accent)] p-2 rounded-lg"
          title="Enviar e-mail"
        >
          <FaEnvelope size={22} />
        </a>
        <a
          href="https://github.com/RafaelAquinodev"
          target="_blank"
          rel="noopener"
          className="bg-[var(--primary-accent)]/20 hover:bg-[var(--primary-accent)]/30 transition text-[var(--primary-accent)] p-2 rounded-lg"
          title="GitHub"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/rafaeloliveira00/"
          target="_blank"
          rel="noopener"
          className="bg-[var(--primary-accent)]/20 hover:bg-[var(--primary-accent)]/30 transition text-[var(--primary-accent)] p-2 rounded-lg"
          title="LinkedIn"
        >
          <FaLinkedin size={22} />
        </a>
      </div>
    </div>
  );
}
