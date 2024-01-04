import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { css, theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  'html, body, #__next': {
    height: '100%',
    padding: 0,
    margin: 0,
    'font-family': `
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      Fira Sans,
      Droid Sans,
      Helvetica Neue,
      sans-serif
    `,
  },
  a: {
    color: 'inherit',
    'text-decoration': 'none',
  },
  '*': {
    'box-sizing': 'border-box',
  },
  body: {
    padding: '0 40px',
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
