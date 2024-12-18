import { DockMain } from '@/components/dock-main'
import Main from '@/components/globals/Main'
import { MarqueeLanguages } from '@/components/languages'
import DotPattern from '@/components/ui/dot-pattern'
import { cn } from '@/lib/utils'

export type IconProps = React.HTMLAttributes<SVGElement>

export default function Home() {
  return (
    <>
      <DotPattern
        width={20}
        height={20}
        cr={0.8}
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
    </>
  )
}
