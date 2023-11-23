type BadgeProps = {
  content: string
  backgroundColor: string
}

const Badge = ({ content, backgroundColor }: BadgeProps) => {
  let color = 'bg-green-500 bg-red-500 bg-yellow-500 bg-purple-500'
  return (
    <div
      style={{ backgroundColor }}
      className={`
        rounded-[20px] min-w-[20px] h-[20px]
        inline-flex
        items-center justify-center
      `}
    >
      <p className="text-white text-xs select-none">{content}</p>
    </div>
  )
}

export default Badge
