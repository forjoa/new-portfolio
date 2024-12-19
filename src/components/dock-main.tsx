import React from 'react'
import Link from 'next/link'

import { Dock, DockIcon } from '@/components/ui/dock'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import Meteors from './ui/meteors'
import { Icons } from '@/assets/icons'

const DATA = {
  contact: {
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/forjoa',
        icon: Icons.github,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/joaquin-trujillo-851547254/',
        icon: Icons.linkedin,
      },
      X: {
        name: 'X',
        url: 'https://x.com/loveujoa',
        icon: Icons.x,
      },
      email: {
        name: 'Send Email',
        url: 'joaquin_trujillo@icloud.com',
        icon: Icons.email,
      },
    },
  },
}

export function DockMain() {
  return (
    <div className='relative flex md:h-[500px] h-[300px] w-full flex-col items-center justify-center overflow-hidden '>
      <Meteors number={30} />
      <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center md:text-8xl text-3xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10'>
        Software developer
      </span>
      <span className='mt-6 text-zinc-400 text-center'>
        Creating any software you could imagine
      </span>
      <div className='relative'>
        <Dock direction='middle'>
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Link
                href={social.url}
                aria-label={social.name}
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'icon' }),
                  'size-12 rounded-full'
                )}
                target='blank'
              >
                <social.icon className='size-6' />
              </Link>
            </DockIcon>
          ))}
        </Dock>
      </div>
    </div>
  )
}
