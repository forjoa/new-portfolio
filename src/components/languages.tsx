import { cn } from '@/lib/utils'
import Marquee from '@/components/ui/marquee'
import { ReactNode, SVGProps } from 'react'
import { languages } from '@/assets/languages-info'

interface LanguagesInfo {
  name: string
  icon: (props: SVGProps<SVGSVGElement>) => ReactNode
}

const firstRow: LanguagesInfo[] =
  languages.frontend as unknown as LanguagesInfo[]
const secondRow: LanguagesInfo[] =
  languages.backend as unknown as LanguagesInfo[]

const LanguageCard = (props: LanguagesInfo) => {
  return (
    <figure
      className={cn(
        'relative w-32 flex flex-col items-center gap-2 cursor-pointer overflow-hidden rounded-xl border p-4',
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <props.icon className='md:w-10 md:h-10 w-6 h-6' />
      <p>{props.name}</p>
    </figure>
  )
}

export function MarqueeLanguages() {
  return (
    <div className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
      <Marquee pauseOnHover className='[--duration:20s]'>
        {firstRow.map((language) => (
          <LanguageCard key={language.name} {...language} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className='[--duration:20s]'>
        {secondRow.map((language) => (
          <LanguageCard key={language.name} {...language} />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div>
    </div>
  )
}
