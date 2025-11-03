// src/routes/index.tsx

import { createFileRoute } from "@tanstack/react-router";
import TrustLogos from "../components/trustLogos";
import HorizontalScrollCards from "../components/horizontalScroll";
import LoadingOverlay from "../components/loadingOverlay";
import StickyPanel from "../components/stickyPanel";

function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden bg-linear-to-b from-zinc-50 to-zinc-100 text-zinc-900">
      {/* Shadow SVG (já está em /shadowBackground.svg) */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-60 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: "url('/shadowBackground.svg')" }}
      />

      {/* Glow vertical suave no centro (coluna de luz) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_100%_at_50%_10%,rgba(0,0,0,0.07),transparent_60%)]" />

      {/* Vignette sutil nas bordas para foco no centro */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(90%_70%_at_50%_50%,black_60%,transparent_100%)] bg-[radial-gradient(120%_80%_at_50%_50%,rgba(0,0,0,0.08),transparent_60%)]" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight">
          Digital Brand
          <br className="hidden sm:block" />
          <span className="inline-block"> Transformation</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-zinc-600">
          Transform your brand, unleash the power of digital with us and turn
          bold visions into market success
        </p>

        {/* Linha com categorias + divisórias */}
        <ul className="mx-auto mt-10 flex items-center justify-center gap-6 text-xs font-medium tracking-wider text-zinc-700">
          <li className="relative pl-4">
            <span
              className="absolute left-0 top-1/2 -translate-y-1/2 h-3.5 w-px bg-zinc-300/80"
              aria-hidden
            />
            WEB
          </li>
          <li className="relative pl-4">
            <span
              className="absolute left-0 top-1/2 -translate-y-1/2 h-3.5 w-px bg-zinc-300/80"
              aria-hidden
            />
            PRINT
          </li>
          <li className="relative pl-4">
            <span
              className="absolute left-0 top-1/2 -translate-y-1/2 h-3.5 w-px bg-zinc-300/80"
              aria-hidden
            />
            SOCIAL
          </li>
          <li className="relative pl-4">
            <span
              className="absolute left-0 top-1/2 -translate-y-1/2 h-3.5 w-px bg-zinc-300/80"
              aria-hidden
            />
            APPS
          </li>
        </ul>
      </div>

      {/* Indicador de scroll (rodapé) */}
      <a
        href="#next"
        className="group absolute bottom-8 left-1/2 -translate-x-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-zinc-300/80 bg-white/80 backdrop-blur hover:bg-white transition"
        aria-label="Scroll down"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="transition-transform group-hover:translate-y-0.5"
          aria-hidden
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <LoadingOverlay />
      <Hero />
      <TrustLogos />
      <StickyPanel
        zIndex={1}
        bgColor="bg-gradient-to-br from-indigo-800 to-purple-900"
        title="Painel 1"
      >
        <p>Eu sou a primeira seção. Role para baixo.</p>
      </StickyPanel>
      <StickyPanel
        zIndex={2}
        bgColor="bg-gradient-to-br from-teal-500 to-cyan-600"
        title="Painel 2"
        height="h-screen"
      >
        <p>Eu deslizei POR CIMA do Painel 1.</p>
      </StickyPanel>
      <StickyPanel
        zIndex={3}
        bgColor="bg-gradient-to-br from-green-600 to-lime-700"
        title="Painel 3"
      >
        <p>E eu deslizei POR CIMA do Painel 2.</p>
      </StickyPanel>
      <StickyPanel
        zIndex={4}
        bgColor="bg-gradient-to-br from-amber-500 to-orange-600"
        title="Painel 4"
      >
        <p>Este é o fim do efeito sticky!</p>
      </StickyPanel>
      <div className="relative z-10 bg-white">
        <section className="h-screen bg-zinc-900 text-white flex items-center justify-center">
          <h2 className="text-5xl">A rolagem normal continua...</h2>
        </section>
        <HorizontalScrollCards />
      </div>
    </main>
  );
}
