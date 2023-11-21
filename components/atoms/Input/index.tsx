type InputProps = {
  placeholder?: string
  hasError?: boolean
  hasBorder?: boolean
}

const Input = ({ placeholder, hasError, hasBorder }: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`
        box-border
        pt-3 pr-3 pb-3 pl-2
        w-full h-10 leading-5
        text-base
        ${hasBorder && 'border border-solid rounded-md'}
        ${hasError ? 'border-danger' : 'border-border'}
        placeholder:text-placeholder
      `}
    ></input>
  )
}

export default Input
