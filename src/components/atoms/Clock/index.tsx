'use client'

import React, { useEffect, useState } from 'react'
import tw, { styled, css, theme } from 'twin.macro'

const StyleClock = styled.span<{ color?: string }>(({ color }) => [
  tw`text-base tracking-mm font-bold`,

  css`
    color: ${color ? color : theme`colors.icon`};
  `,
])

type ClocckProps = {
  color?: string
}

const Clock = ({ color }: ClocckProps) => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    'use client'
    const id = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <StyleClock color={color}>
      {time.toLocaleTimeString([], { hour12: false, timeStyle: 'medium' })}
    </StyleClock>
  )
}

export default Clock
