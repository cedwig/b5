import clsx from 'clsx'

type CornerIndentationProps = {
  className?: string
  rotation?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

export const CornerIndentation = ({
  className,
  rotation = 'top-left',
  ...rest
}: CornerIndentationProps) => {
  const transformClass = {
    'top-left': '',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]',
    'bottom-right': 'scale-x-[-1] scale-y-[-1]',
  }[rotation]

  return (
    // Pass a text-color style to change svgs color (e.g. using tailwind: "text-green-100", for a light green color)
    <div className={clsx('bg-inherit', className)} {...rest}>
      <svg
        className={clsx('fill-current w-full h-auto', transformClass)}
        preserveAspectRatio="none"
        data-bbox="0 0 160 63.119"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 160 63.119"
        height="64"
        width="160"
        data-type="shape"
        role="presentation"
        aria-hidden="true"
        aria-label=""
      >
        <g>
          <path d="M9.786 53.333C4.38 53.333 0 57.715 0 63.119V0h160a9.786 9.786 0 0 0-9.786 9.786V20.06c0 18.376-14.896 33.272-33.272 33.272z"></path>
        </g>
      </svg>
    </div>
  )
}
