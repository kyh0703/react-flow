type InputProps = {
  hasError?: boolean
  hasBorder?: boolean
}

const Input = ({ hasError, hasBorder }: InputProps) => {
  return (
    <input
      type="text"
      className={`
        border-none
        box-border
        pt-3 pr-3 pb-3 pl-2
        w-full h-10 leading-5
        text-base
        placeholder:text-placeholder
        ${hasBorder && 'border border-solid rounded-md'}
        ${hasBorder && hasError && 'border-danger'}
      `}
    ></input>
  )
}

export default Input
