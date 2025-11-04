// src/routes/index.tsx

import { createFileRoute } from '@tanstack/react-router'
import TrustLogos from '../components/trustLogos'
import HorizontalScrollCards from '../components/horizontalScroll'
import LoadingOverlay from '../components/loadingOverlay'
import StickyPanel from '../components/stickyPanel'
import Hero from '../components/hero'
import Intro from '../components/intro'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <LoadingOverlay />
      <Hero />
      <TrustLogos />

      <StickyPanel zIndex={1} className="w-full" height="h-screen" fullBleed>
        <Intro embed />
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
  )
}
