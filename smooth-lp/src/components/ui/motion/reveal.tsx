'use client'
import { motion, type Variants } from 'framer-motion'
import type { ElementType, PropsWithChildren } from 'react'

const fadeUpBlur: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

/**
 * Revela qualquer conteúdo com fade-up + blur quando entra na viewport.
 * - `as` permite trocar a tag (h1, p, div...).
 * - `amount`: quanto do elemento precisa entrar (0–1).
 */
export function Reveal<T extends ElementType = 'div'>({
  as,
  children,
  className,
  amount = 0.6,
  ...rest
}: PropsWithChildren<
  { as?: T; className?: string; amount?: number } & Omit<
    React.ComponentProps<T>,
    'children' | 'className'
  >
>) {
  const Tag = (as ?? 'div') as ElementType
  return (
    <motion.div
      variants={fadeUpBlur}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount }}
      className={className}
    >
      <Tag {...(rest as any)}>{children}</Tag>
    </motion.div>
  )
}
