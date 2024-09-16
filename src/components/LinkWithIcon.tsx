import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type LinkWithIconProps = {
  icon?: string
  href: string
  className?: string
  style?: object
  children?: React.ReactNode
}

export const LinkWithIcon = ({
  icon,
  href,
  className,
  style,
  children,
}: LinkWithIconProps) => {
  return (
    <Link
      className={twMerge('flex items-center justify-center gap-2', className)}
      style={style}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon && (
        <Image
          className="h-8 w-8"
          src={icon}
          width={48}
          height={48}
          alt="socialLink"
        />
      )}
      {children}
    </Link>
  )
}
