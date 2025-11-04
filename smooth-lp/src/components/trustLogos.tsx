'use client'
import { useEffect, useState } from 'react'
import Logo from './ui/logo'
import './trustLogo.css'

const baseLogos = [
  'React',
  'Vite',
  'TanStack Router',
  'Tailwind',
  'pnpm',
  'Biome',
  'Lucide-react',
  'Tailwind-variants',
  'Framer-Motion',
  'GSAP',
]

export default function TrustLogos() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => setIsClient(true), [])

  // duplicar várias vezes garante continuidade visual sem “salto”
  const allLogos = [...baseLogos, ...baseLogos, ...baseLogos, ...baseLogos]

  // escolha a velocidade aplicando a classe .marquee-40 (ou 20/30/60, etc.)
  return (
    <section className="bg-black py-10 text-white overflow-hidden">
      <p className="text-center pb-4 text-sm uppercase tracking-widest text-white/50">
        Tecnologias utilizadas
      </p>

      <div className="relative w-full py-6 group marquee-40">
        <div className="overflow-hidden">
          <div
            className={`marquee-content flex gap-8 w-max ${
              isClient ? 'running' : ''
            }`}
          >
            {allLogos.map((logo, i) => (
              <Logo key={`${logo}-${i}`} name={logo} />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-black to-transparent" />
      </div>
    </section>
  )
}
