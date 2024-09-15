type ExternalLinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: React.ReactNode
  className?: string
  href: string
}

export const ExternalLinkButton: React.FC<ExternalLinkButtonProps> = ({
  children,
  className = '',
  href,
  ...rest
}) => {
  return (
    <a
      href={href}
      className={`cursor-pointer min-w-fit text-nowrap flex items-center transition-all duration-150 ease-in-out justify-center px-2 py-1 rounded-full ${className}`}
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  )
}
