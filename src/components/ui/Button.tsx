import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'outline' | 'outlineOnDark' | 'white' | 'ghost' | 'whatsapp'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none'

// Each variant fully owns its own bg/text/border colors — never override those
// via the `className` prop, since plain Tailwind utilities of equal
// specificity don't reliably cascade in declaration order. Add a new variant
// instead (see outlineOnDark/white below, added for exactly this reason).
const variants: Record<Variant, string> = {
  primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-sm',
  secondary: 'bg-ink-900 text-white hover:bg-ink-800',
  outline: 'border border-ink-200 text-ink-900 hover:bg-ink-50',
  outlineOnDark: 'border border-white/30 text-white hover:bg-white/10',
  white: 'bg-white text-primary-700 hover:bg-primary-50 shadow-sm',
  ghost: 'text-ink-700 hover:bg-ink-100',
  whatsapp: 'bg-[#25D366] text-white hover:bg-[#1fb958] shadow-sm',
}

const sizes: Record<Size, string> = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-[0.95rem]',
  lg: 'px-6 py-3.5 text-base',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
  icon?: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {icon}
      {children}
    </button>
  )
}

export function LinkButton({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon,
  to,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) {
  const isExternal = /^https?:\/\//.test(to) || to.startsWith('tel:') || to.startsWith('mailto:')
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`
  if (isExternal) {
    return (
      <a href={to} className={classes} {...props}>
        {icon}
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={classes} {...(props as object)}>
      {icon}
      {children}
    </Link>
  )
}
