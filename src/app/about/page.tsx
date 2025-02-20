import Main from '@/components/ui/main'
import SelectFilter from '@/components/select-filter'

const aboutContent = [
  {
    title: 'About me',
    description:
      'I am a software developer with a focus on web development. I am passionate about building things that are useful and easy to use.',
    category: 'personal',
  },
  {
    title: 'Experience',
    description:
      'I have experience in web development, mobile development, and game development.',
    category: 'professional',
  },
  {
    title: 'Education',
    description:
      'I am a student of the Computer Science degree at the Universidad de Costa Rica.',
    category: 'professional',
  },
  {
    title: 'Skills',
    description:
      'I am proficient in JavaScript, TypeScript, React, Next.js, and Tailwind CSS.',
    category: 'professional',
  },
  {
    title: 'Interests',
    description:
      'I am interested in web development, mobile development, and game development.',
    category: 'personal',
  }
]

export default async function About(props: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const searchParams = await props.searchParams
  const { filter } = searchParams ?? 'all'

  return (
    <>
      <Main>
        <p>Filter content</p>
        <p>param: {filter}</p>

        <SelectFilter defaultValue={filter as string} />

        {filter && filter !== 'all'
          ? aboutContent
            .filter(c => c.category === filter)
            .map((item, index) => (
              <div key={index} className='mb-4'>
                <p>{item.title}</p>
                <p>{item.description}</p>
              </div>
            ))
          : aboutContent.map((item, index) => (
            <div key={index} className='mb-4'>
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div>
          ))}
      </Main>
    </>
  )
}