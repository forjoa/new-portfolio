import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'
import Safari from './ui/safari'

const features = [
  {
    name: 'Talk',
    description:
      'Real time chat web application built on Next.js, WebSockets and Turso.',
    href: 'https://talk-axvc.onrender.com/login',
    cta: 'Learn more',
    background: (
      <Safari
        className='mx-auto mt-auto w-[86%] h-full'
        imageSrc='https://joa-dev-portfolio.vercel.app/assets/talk-1de3f52d.png'
      />
    ),
    className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
  },
  {
    name: 'Bloginary',
    description: 'Blog web application built on Astro and React.js.',
    href: 'https://bloginary.vercel.app/',
    cta: 'Learn more',
    background: (
      <Safari
        className='mx-4 mt-4 w-[86%] h-full'
        imageSrc='https://res.cloudinary.com/drqv0jv7c/image/upload/fl_preserve_transparency/v1734616586/Captura_de_pantalla_2024-12-19_145759_t1bfxn.jpg?_s=public-apps'
      />
    ),
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
  },
  {
    name: 'Bonds backend',
    description: 'Node.js & Typescript backend API for Bonds social media app.',
    href: 'https://github.com/forjoa/bonds-backend/blob/main/src/index.ts',
    cta: 'Learn more',
    background: (
      <Safari
        className='mx-4 mt-4 w-[86%] h-full md:hidden block'
        imageSrc='https://res.cloudinary.com/drqv0jv7c/image/upload/fl_preserve_transparency/v1734617756/Captura_de_pantalla_2024-12-19_151721_eucdqz.jpg?_s=public-apps'
      />
    ),
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
  },
  {
    name: 'Tu Guía Virtual backend',
    description:
      'Backend for mobile application about touristic guides built on Spring Boot.',
    href: '/',
    cta: 'Learn more',
    // eslint-disable-next-line @next/next/no-img-element
    background: <img className='opacity-60' alt='Empty image' />,
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
  },
  {
    name: 'Trackshare',
    description:
      'Web application that allows you to share your song link in a single link.',
    href: 'https://trackshare-ruddy.vercel.app/',
    cta: 'Learn more',
    background: (
      <Safari
        className='mx-4 mt-4 w-[86%] h-full'
        imageSrc='https://joa-dev-portfolio.vercel.app/assets/trackshare-eedf75fb.png/'
      />
    ),
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
  },
]

export function BestProjects() {
  return (
    <BentoGrid className='lg:grid-rows-3'>
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  )
}
