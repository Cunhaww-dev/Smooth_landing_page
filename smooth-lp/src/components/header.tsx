import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="flex w-full h-20 px-8 items-center justify-between bg-zinc-900 border-b border-zinc-600">
      <Link
        to="/"
        className="text-xl font-bold text-zinc-100 transition-colors hover:text-zinc-300"
      >
        LogoEstudos
      </Link>

      <nav className="flex items-center gap-6">
        <Link
          to="/"
          className="text-zinc-300 transition-colors hover:text-zinc-100 [&.active]:font-bold [&.active]:text-zinc-100"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-zinc-300 transition-colors hover:text-zinc-100 [&.active]:font-bold [&.active]:text-zinc-100"
        >
          Sobre
        </Link>
        <Link
          to="/contact"
          className="text-zinc-300 transition-colors hover:text-zinc-100 [&.active]:font-bold [&.active]:text-zinc-100"
        >
          Contato
        </Link>
      </nav>
    </header>
  );
}
