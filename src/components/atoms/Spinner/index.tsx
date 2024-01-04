'use client'

import { styled, css } from 'twin.macro'

const StyledSpinner = styled.svg<{ size: number; isAutoCentering: boolean }>(
  ({ size, isAutoCentering }) => [
    isAutoCentering &&
      css`
        margin: -${size / 2}px 0 0 -${size / 2}px;
      `,

    css`
      animation: rotate 2s linear infinite;
      width: ${size}px;
      height: ${size}px;

      & .path {
        stroke: #000;
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
      }

      @keyframes rotate {
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes dash {
        0% {
          stroke-dasharray: 1, 150;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 90, 150;
          stroke-dashoffset: -35;
        }
        100% {
          stroke-dasharray: 90, 150;
          stroke-dashoffset: -124;
        }
      }
    `,
  ],
)

type SpinnerProps = {
  size?: number
  strokeWidth?: number
  isAutoCentering?: boolean
}

const Spinner = (props: SpinnerProps) => {
  const { size = 50, strokeWidth = 4, isAutoCentering = false } = props

  return (
    <StyledSpinner
      size={size}
      isAutoCentering={isAutoCentering}
      viewBox={`0 0 ${size} ${size}`}
    >
      <circle
        className="path"
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - strokeWidth / 2}
        fill="none"
        strokeWidth={strokeWidth}
      />
    </StyledSpinner>
  )
}

export default Spinner
