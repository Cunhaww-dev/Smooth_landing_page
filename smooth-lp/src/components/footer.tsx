// src/components/footer.tsx

import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link
              to="/"
              className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              &lt;.Dev /&gt;
            </Link>
            <p className="mt-4 text-sm">
              Engenharia de Software de Alta Performance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors">
                  Projetos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <p className="text-sm">contato@.dev (Exemplo)</p>
            <p className="mt-2 text-sm">Disponível para novos desafios.</p>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} .Dev. Todos os direitos
            reservados.
          </p>
          <p className="mt-1">
            Construído com React, Framer Motion e Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
