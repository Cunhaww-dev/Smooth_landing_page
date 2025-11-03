// src/components/header.tsx
'use client'
import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled ? 'backdrop-blur bg-black/40' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 md:px-8">
        <Link to="/" className="font-medium tracking-tight">
          Logo
        </Link>
        <nav className="flex items-center gap-6 text-sm text-white/80">
          <Link to="/about">Sobre</Link>
          <Link
            to="/contact"
            className="rounded-full bg-white px-3 py-1.5 text-black hover:bg-white/90"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}
