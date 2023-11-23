type SpinnerProps = {
  size?: number
  strokeWidth?: number
  isAutoCentering?: boolean
}

const Spinner = (props: SpinnerProps) => {
  const { size = 50, strokeWidth = 4, isAutoCentering = false } = props

  const margin =
    isAutoCentering && `-mt-[${size / 2}px] mr-0 mb-0 -ml-[${size / 2}px]`

  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`
        animate-rotate
        ${isAutoCentering && margin}
    `}
      viewBox={`0 0 ${size} ${size}`}
    >
      <circle
        strokeLinecap="round"
        className="stroke-black animate-dash"
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - strokeWidth / 2}
        fill="none"
        strokeWidth={strokeWidth}
      ></circle>
    </svg>
  )
}

export default Spinner
