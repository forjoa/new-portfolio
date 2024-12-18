import { DockDemo } from '@/components/dock-main'
import Main from '@/components/globals/Main'

import DotPattern from '@/components/ui/dot-pattern'

export type IconProps = React.HTMLAttributes<SVGElement>

export default function Home() {
  return (
    <>
      <DotPattern width={20} height={20} cr={0.8} />
      <Main>
        <div className='relative'>
          <DockDemo />
        </div>
      </Main>
    </>
  )
}
