'use client'
import { motion, type Variants } from 'framer-motion'

const containerLetters: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
}

const letter: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(2px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export function SplitLetters({
  text,
  className,
  amount = 0.7,
}: {
  text: string
  className?: string
  amount?: number
}) {
  return (
    <motion.span
      className={className}
      aria-label={text}
      variants={containerLetters}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount }}
    >
      {text.split('').map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block will-change-[filter]"
          variants={letter}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </motion.span>
      ))}
    </motion.span>
  )
}
