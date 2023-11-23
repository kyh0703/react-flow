type SeparatorProps = {
  children?: React.ReactNode
}

const getMargin = ({ children }: SeparatorProps) => (children ? '.50em' : '0')

const Separator = ({ children }: SeparatorProps) => {
  const margin = getMargin({ children })
  return (
    <div
      className={`
        h-6 flex items-center text-[#e5e7eb]
        before:after:content-[''] flex-1 border-b-2 border-solid border-[#e5e7eb]
        before:mr-${margin}
        after:ml-${margin}
      `}
    >
      {children}
    </div>
  )
}

export default Separator
