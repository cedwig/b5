import { twMerge } from 'tailwind-merge'

type MarqueeProps = {
  text: string
  text2?: string
  className?: string
  duration?: string
}

export const Marquee: React.FC<MarqueeProps> = ({ text, text2, className }) => {
  return (
    <div
      className={twMerge(
        'relative overflow-hidden w-full whitespace-nowrap',
        className,
      )}
    >
      <div className="absolute right-0 w-1/6 z-20 bg-gradient-to-r from-transparent to-neutral-100 h-full pointer-events-none"></div>
      <div className="absolute left-0 w-1/6 z-20 inset-0 bg-gradient-to-l from-transparent to-neutral-100 h-full pointer-events-none"></div>
      <div className="flex animate-marqueeSm md:animate-marqueeMd lg:animate-marqueeXl h-full gap-[50%] w-full items-center hover:animation-paused hover:cursor-pointer">
        <div className="whitespace-nowrap text-start min-w-full">{text}</div>
        <div className="whitespace-nowrap text-start min-w-full">
          {text2 ? text2 : text}
        </div>
      </div>
    </div>
  )
}
