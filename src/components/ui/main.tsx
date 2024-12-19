export default function Main({
    className,
    children,
  }: {
    className?: string
    children: React.ReactNode
  }) {
    return (
      <main
        className={`${className} md:max-w-[800px] w-[80%] mx-auto bg-white rounded border backdrop-blur z-10 p-4 shadow-sm`}
      >
        {children}
      </main>
    )
  }
  