import SelectFilter from "@/components/select-filter"
import Main from "@/components/ui/main"
import ShimmerButton from "@/components/ui/shimmer-button"

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
            <div className="flex justify-end mt-4">
                <ShimmerButton className='shadow-2xl'>
                    <span className='whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg'>
                        <a href={`/newResume${filter != 'es' || filter == undefined ? '-' + filter : ''}.pdf`}
                            download className="z-60">Download resume</a>
                    </span>
                </ShimmerButton>
            </div>
        </Main>
    )
}