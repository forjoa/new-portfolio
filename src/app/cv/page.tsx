import SelectFilter from "@/components/select-filter"
import Main from "@/components/ui/main"

const content = {
    label: 'Languages',
    placeholder: 'Choose language',
    items: [
        {
            label: 'English',
            value: 'en',
        },
        {
            label: 'Spanish',
            value: 'es',
        }
    ],
    tooltip: 'Select a language to show resume'
}

export default async function CVPage(props: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const searchParams = await props.searchParams
    let { filter } = searchParams ?? 'all'
    filter = filter != undefined ? filter : 'es'

    return (
        <Main>
            <div className='w-full flex justify-end mb-4'>
                <SelectFilter defaultValue={filter as string} content={content} />
            </div>

            <iframe
                src={`/newResume${filter != 'es' || filter == undefined ? '-' + filter : ''}.pdf`}
                className="w-full h-[80vh] border rounded-lg"
            />
            <div className="flex justify-end">
                <a
                    href="/newResume.pdf"
                    download
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Download CV
                </a>
            </div>
        </Main>
    )
}