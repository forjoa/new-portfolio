import { DockMain } from '@/components/dock-main'
import Main from '@/components/globals/main'
import { MarqueeLanguages } from '@/components/languages'
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'
import BlurIn from '@/components/ui/blur-in'
import DotPattern from '@/components/ui/dot-pattern'
import ShimmerButton from '@/components/ui/shimmer-button'
import { cn } from '@/lib/utils'

export type IconProps = React.HTMLAttributes<SVGElement>

export default function Home() {
  return (
    <>
      <DotPattern
        width={20}
        height={20}
        cr={1}
        className={cn(
          '[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]'
        )}
      />
      <Main>
        <div className='relative'>
          <DockMain />
        </div>
      </Main>
      <Main className='mt-8'>
        <MarqueeLanguages />
      </Main>
      <Main className='mt-8 py-8 h-auto overflow-hidden'>
        <BlurIn
          word='Do you want to develop something?'
          className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl md:text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10'
          duration={2}
        />
        <BlurIn
          word='Do you need any software?'
          className='mt-4 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl md:text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10'
          duration={4}
        />
        <ShimmerButton className='shadow-2xl mx-auto mt-8 z-10'>
          <span className='whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg'>
            <a href='mailto:joaquin_trujillo@icloud.com'>Contact me</a>
          </span>
        </ShimmerButton>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
            'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
          )}
        />
      </Main>
    </>
  )
}
