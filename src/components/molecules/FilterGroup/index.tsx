import React, { useCallback, useEffect, useState } from 'react'

import CheckBox from '@/components/molecules/CheckBox'

type Item = {
  label: string
  name: string
}

type FilterGroupProps = {
  title: string
  items: Item[]
  value?: string[]
  defaultValue?: string[]
  onChange?: (values: string[]) => void
}

/**
 * 필터 그룹
 */
const FilterGroup = ({
  title,
  items,
  value = [],
  defaultValue = [],
  onChange,
}: FilterGroupProps) => {
  const [selected, setSelected] = useState(value ?? defaultValue)

  useEffect(() => {
    setSelected(value)
  }, [value])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.name
      const newSelected = e.target.checked
        ? [...selected, value]
        : selected.filter(v => v !== value)

      setSelected(newSelected)
      onChange && onChange(newSelected)
    },
    [onChange, selected],
  )

  return (
    <>
      <span tw="font-bold">{title}</span>
      <div tw="mt-0.5">
        {items.map(({ label, name }, i) => (
          <div key={i}>
            <CheckBox
              name={name}
              label={label}
              checked={!!selected.find(e => e === name)}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default FilterGroup
