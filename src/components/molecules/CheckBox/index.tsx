import React, { useRef, useState, useCallback, useEffect } from 'react'
import tw, { styled } from 'twin.macro'

import { CheckBoxOutlineBlankIcon, CheckBoxIcon } from '@/components/atoms/Icon'

export interface CheckBoxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
  /**
   * 표시 라벨
   */
  label?: string
}

const CheckBoxElement = styled.input(tw`hidden`)

const Label = styled.label(tw`cursor-pointer ml-1.5 select-none`)

const CheckBox = (props: CheckBoxProps) => {
  const { id, label, onChange, checked, ...rest } = props
  const [isChecked, SetIsChecked] = useState(checked)
  const ref = useRef<HTMLInputElement>(null)

  const onClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      ref.current?.click()
      SetIsChecked(isChecked => !isChecked)
    },
    [ref, SetIsChecked],
  )

  useEffect(() => {
    SetIsChecked(checked ?? false)
  }, [checked])

  return (
    <>
      <CheckBoxElement
        {...rest}
        ref={ref}
        type="checkbox"
        checked={isChecked}
        readOnly={!onChange}
        onChange={onChange}
      />
      <div tw="flex items-center">
        {/* CheckBox On/Off */}
        {checked ?? isChecked ? (
          <CheckBoxIcon size={20} onClick={onClick} />
        ) : (
          <CheckBoxOutlineBlankIcon size={20} onClick={onClick} />
        )}
        {/* ChceckBox Label */}
        {label && label.length > 0 && (
          <Label htmlFor={id} onClick={onClick}>
            <span>{label}</span>
          </Label>
        )}
      </div>
    </>
  )
}

export default CheckBox
