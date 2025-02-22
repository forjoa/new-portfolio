import Main from '@/components/ui/main'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SelectFilter from '@/components/select-filter'
import { aboutContent } from '@/assets/about-content'

const content = {
  placeholder: 'Select a category',
  label: 'Categories',
  items: [
    {
      value: 'all',
      label: 'All',
    },
    {
      value: 'personal',
      label: 'Personal',
    },
    {
      value: 'professional',
      label: 'Professional',
    },
  ],
  tooltip: 'Select a category information'
}

export default async function About(props: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const searchParams = await props.searchParams
  const { filter } = searchParams ?? 'all'

  return (
    <>
      <Main>
        <div className='w-full flex justify-end mb-4'>
          <SelectFilter defaultValue={filter as string} content={content} />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(filter && filter !== "all" ? aboutContent.filter((c) => c.category === filter) : aboutContent).map(
            (item) => (
              <Card key={item.id} className="group transition-all hover:shadow-lg dark:hover:shadow-primary/5">
                <CardHeader className='flex flex-col gap-4'>
                  <CardTitle>{item.title}</CardTitle>
                  <div className="w-full flex justify-end">
                    <p className={`border rounded py-2 px-4 ${item.category == 'personal' ? 'text-green-500 bg-green-500/10' : 'text-blue-500 bg-blue-500/10'}`}>{item.category}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ),
          )}
        </div>
      </Main>
    </>
  )
}