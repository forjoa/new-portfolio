import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import HyperText from '@/components/ui/hyper-text'
import { Icons } from '@/assets/icons'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Joaquin Trujillo | Software developer',
  description: "Joaquin's portfolio as a software developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${geistSans.className}`}
      >
        <a href='https://github.com/forjoa' target='blank' className='fixed md:right-10 md:bottom-10 right-4 bottom-4 z-50 w-12 h-12 shadow-lg rounded-full bg-white'>
          <Icons.github className='' />
        </a>
        <nav className='relative flex justify-between items-center rounded border border-zinc-200 shadow-sm p-4 my-10 mx-auto md:max-w-[800px] w-[80%] backdrop-blur z-10'>
          <section>
            <Link href='/' className='font-bold'>
              <HyperText className='cursor-pointer' text={'<Joa/>'} />
            </Link>
          </section>
          <section>
            <ul className='flex gap-4'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/about'>About me</Link>
              </li>
            </ul>
          </section>
        </nav>
        {children}
        <footer className='md:max-w-[800px] w-[80%] mx-auto mt-8 border-t border-x border-zinc-200 rounded-t p-4'>
          <p>
            Made with ❤️ by{' '}
            <a className='underline' href='https://github.com/forjoa' target='blank'>
              forjoa
            </a>
          </p>
        </footer>
      </body>
    </html>
  )
}
