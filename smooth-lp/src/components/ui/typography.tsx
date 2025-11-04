import type { ComponentProps, ElementType, ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const typography = tv({
  base: 'font-sans text-zinc-200',
  variants: {
    variant: {
      display: 'text-5xl font-semibold leading-[0.95]',
      title: 'text-4xl font-semibold tracking-[-0.02em]',
      body: 'text-base',

      subtitle: 'mx-auto mt-6 max-w-2xl text-base sm:text-lg text-zinc-600',
      caption: 'text-xs text-zinc-400 uppercase',
      code: 'font-mono text-sm',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
    },
  },
  defaultVariants: {
    variant: 'body',
    align: 'left',
    tone: 'default',
  },
})

type TypographyProps<T extends ElementType> = {
  as?: T
  children: ReactNode
} & Omit<ComponentProps<T>, 'color'> &
  VariantProps<typeof typography>

export function Typography<T extends ElementType = 'p'>({
  as,
  children,
  className,
  variant,
  align,
  tone,
  size,
  ...props
}: TypographyProps<T>) {
  const Tag = (as ?? defaultTag(variant)) as ElementType
  return (
    <Tag className={typography({ variant, size, class: className })} {...props}>
      {children}
    </Tag>
  )
}

function defaultTag(variant: VariantProps<typeof typography>['variant']) {
  switch (variant) {
    case 'display':
      return 'h1'
    case 'title':
      return 'h2'
    case 'caption':
      return 'span'
    case 'code':
      return 'code'
    default:
      return 'p'
  }
}
