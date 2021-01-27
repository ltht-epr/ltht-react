import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/core'
import { DESKTOP_MEDIA_QUERY, BTN_COLOURS } from '@ltht-react/styles'

const setColors = (buttonStyle: string): SerializedStyles => {
  switch (buttonStyle) {
    case 'primary':
      return css`
        color: ${BTN_COLOURS.PRIMARY.TEXT};
        background-color: ${BTN_COLOURS.PRIMARY.VALUE};
        &:hover {
          background-color: ${BTN_COLOURS.PRIMARY.HOVER};
        }

        &:disabled {
          background-color: ${BTN_COLOURS.PRIMARY.DISABLED};
        }
      `
    case 'standard':
      return css`
        color: ${BTN_COLOURS.STANDARD.TEXT};
        background-color: ${BTN_COLOURS.STANDARD.VALUE};
        &:hover {
          background-color: ${BTN_COLOURS.STANDARD.HOVER};
        }

        &:disabled {
          background-color: ${BTN_COLOURS.STANDARD.DISABLED};
        }
      `
    case 'default':
      return css`
        color: ${BTN_COLOURS.DEFAULT.TEXT};
        background-color: ${BTN_COLOURS.DEFAULT.VALUE};
        &:hover {
          background-color: ${BTN_COLOURS.DEFAULT.HOVER};
        }

        &:disabled {
          background-color: ${BTN_COLOURS.DEFAULT.DISABLED};
        }
      `
    case 'workflow':
      return css`
        color: ${BTN_COLOURS.WORKFLOW.TEXT};
        background-color: ${BTN_COLOURS.WORKFLOW.VALUE};
        &:hover {
          background-color: ${BTN_COLOURS.WORKFLOW.HOVER};
        }

        &:disabled {
          background-color: ${BTN_COLOURS.WORKFLOW.DISABLED};
        }
      `
    default:
      return css``
  }
}

const StyledButton = styled('button')<StyledProps>`
  display: block;
  text-align: center;
  white-space: nowrap;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 4px;
  width: 100%;

  &:hover:not([disabled]) {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.65;
  }

  ${DESKTOP_MEDIA_QUERY} {
    display: inline-block;
    vertical-align: middle;
    width: auto;
  }

  ${({ buttonStyle }): SerializedStyles => setColors(buttonStyle)}
`

const Button: React.FC<Props> = ({ type, value, buttonStyle = 'default', disabled = false, ...rest }) => (
  <StyledButton type={type} buttonStyle={buttonStyle} disabled={disabled} {...rest}>
    {value}
  </StyledButton>
)

type ButtonStyle = 'default' | 'primary' | 'standard' | 'workflow'
type ButtonTypes = 'button' | 'submit' | 'reset'

interface Props extends ButtonProps {
  buttonStyle?: ButtonStyle
}

interface StyledProps {
  buttonStyle: ButtonStyle
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: ButtonTypes
  value: string
  disabled?: boolean
}

export default Button
