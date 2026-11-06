/* Link that opens in a new tab. mailto: links stay in place. */
export function A({ href, children, className }) {
  const external = !href.startsWith('mailto:')
  return (
    <a
      href={href}
      className={className}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  )
}
