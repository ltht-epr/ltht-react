import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const Col = styled.div<ColType>`
  width: auto;

  ${props =>
    props.stretched &&
    css`
      flex: 1;
    `}

  ${props =>
    props.ellipsis &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`

interface ColType {
  stretched?: boolean | undefined
  ellipsis?: boolean | undefined
}

export default Col
