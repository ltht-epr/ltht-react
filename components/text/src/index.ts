/** @jsx jsx **/
import React from 'react'
import { css, jsx } from '@emotion/core'

import { CSS_RESET, PRIMARY_TEXT_COLOUR, SECONDARY_TEXT_COLOUR } from '@ltht-react/core'

const styles = (props: TextProps) => css`
  ${CSS_RESET};
  display: block;
  ${props.primary && `color: ${PRIMARY_TEXT_COLOUR};`}
  ${props.secondary && `color: ${SECONDARY_TEXT_COLOUR};`}
  ${props.transform === 'uppercase' && 'text-transform: uppercase;'}
  ${props.transform === 'lowercase' && 'text-transform: lowercase;'}
  ${props.align === 'left' && 'text-align: left;'}
  ${props.align === 'center' && 'text-align: center;'}
  ${props.align === 'right' && 'text-align: right;'}
`

const Text: React.FC<TextProps> = props => {
  return <span css={styles(props)}>{props.children}</span>
}

type TextProps = {
  align?: 'left' | 'center' | 'right' | undefined
  wrap?: boolean | undefined
  truncate?: boolean | undefined
  transform?: 'lowercase' | 'uppercase' | 'capitalise' | undefined
  primary?: boolean | undefined
  secondary?: boolean | undefined
}

export { Text }
