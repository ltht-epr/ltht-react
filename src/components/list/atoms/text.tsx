import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const Text = styled.span<TextProps>`
  color: black;

  li:hover & {
    color: white;
  }

  ${props =>
    props.blue &&
    css`
      color: #4090c4;

      li:hover & {
        color: white;
      }
    `}

  ${props =>
    props.grey &&
    css`
      color: #808080;

      li:hover & {
        color: #808080;
      }
    `}
`

interface TextProps {
  blue?: boolean | undefined
  grey?: boolean | undefined
}

export default Text
