import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'
import Safari from './ui/safari'

const features = [
  {
    name: 'AI Receptionist',
    description:
      'LLM-powered customer service chatbots for a clinic and a restaurant, grounded on business data.',
    href: 'https://chatbots-lemon.vercel.app',
    cta: 'Learn more',
    background: (
      <Safari
        className='mx-auto mt-auto w-[86%] h-full'
        imageSrc='/projects/chatbots.png'
      />
    ),
    className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
  },
  {
    name: 'Intelligent Document Processing',
    description:
      'FastAPI pipeline that OCRs PDFs, classifies them, extracts structured fields and enables semantic search with pgvector.',
    href: 'https://intelligent-document-processing-eosin.vercel.app',
    cta: 'Learn more',
    background: (
      <Safari
        className='mx-4 mt-4 w-[86%] h-full'
        imageSrc='/projects/idp.png'
      />
    ),
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
  },
  {
    name: 'MCP Groupon Deals',
    description:
      'MCP server that lets AI assistants search, compare and analyse Groupon Spain deals.',
    href: 'https://github.com/forjoa/mcp-groupon-deals',
    cta: 'Learn more',
    background: <div className='opacity-60' />,
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
  },
  {
    name: 'Spendly',
    description:
      'SaaS that captures financial transactions and processes them automatically.',
    href: 'https://github.com/forjoa/spendly',
    cta: 'Learn more',
    background: <div className='opacity-60' />,
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
  },
  {
    name: 'DataForge',
    description:
      'Open source playground to solve data challenges on real datasets, right in the browser.',
    href: 'https://dataforge-beta.vercel.app',
    cta: 'Learn more',
    background: (
      <Safari
        className='mx-4 mt-4 w-[86%] h-full'
        imageSrc='/projects/dataforge.png'
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
