'use client'

import tw, { styled, css, theme } from 'twin.macro'

const FullScreen = styled.div(() => [
  tw`fixed z-30 top-0 left-0 w-full h-full`,
  tw`flex justify-center items-center`,
  css`
    background: rgba(0, 0, 0, 0.25);
  `,
])

const Modalcontainer = styled.div<{
  width: string
  backgroundColor?: string
}>(({ width, backgroundColor }) => [
  tw`flex flex-col justify-center items-center`,
  tw`p-6 rounded shadow-lg`,

  css`
    width: ${width};
    background: ${backgroundColor ? backgroundColor : theme`colors.primary`};
    border-radius: 8px;

    h2 {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 3rem;
    }
  `,
])

type ModalProps = {
  title: string
  description: string
  isVisible?: boolean
  backgroundColor?: string
  width?: string
  children?: React.ReactNode
}

const Modal = ({
  title,
  description,
  isVisible = true,
  backgroundColor,
  width = '500px',
  children,
}: ModalProps) => {
  if (!isVisible) return null
  return (
    <FullScreen>
      <Modalcontainer width={width} backgroundColor={backgroundColor}>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
      </Modalcontainer>
    </FullScreen>
  )
}

export default Modal
