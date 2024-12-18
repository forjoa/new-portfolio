export default function Main({
    className,
    children,
  }: {
    className?: string
    children: React.ReactNode
  }) {
    return (
      <main
        className={`${className} max-w-[800px] mx-auto bg-white rounded border backdrop-blur z-10 p-4 shadow-sm`}
      >
        {children}
      </main>
    )
  }
  