import { FC, ReactNode, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/react'
import { DESKTOP_MINIMUM_MEDIA_QUERY, BTN_COLOURS } from '@ltht-react/styles'

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
    case 'danger':
      return css`
        color: ${BTN_COLOURS.DANGER.TEXT};
        background-color: ${BTN_COLOURS.DANGER.VALUE};
        &:hover {
          background-color: ${BTN_COLOURS.DANGER.HOVER};
        }

        &:disabled {
          background-color: ${BTN_COLOURS.DANGER.DISABLED};
        }
      `

    case 'clear':
      return css`
        color: ${BTN_COLOURS.CLEAR.TEXT};
        background-color: ${BTN_COLOURS.CLEAR.VALUE};
        &:hover {
          background-color: ${BTN_COLOURS.CLEAR.HOVER};
        }

        &:disabled {
          background-color: ${BTN_COLOURS.CLEAR.DISABLED};
        }
      `
    default:
      return css``
  }
}

const setIconMargins = (placement: IconPlacement): SerializedStyles => {
  switch (placement) {
    case 'left':
      return css`
        margin: 0 0.75rem 0 0;
      `
    case 'right':
      return css`
        margin: 0 0 0 0.75rem;
      `
    case 'center':
      return css`
        margin: 0;
      `
    default:
      return css``
  }
}

const StyledButton = styled.button<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 0.8rem;
  font-weight: bold;
  line-height: 1.5;
  border-radius: 4px;
  width: 100%;

  &:hover:not([disabled]) {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  ${DESKTOP_MINIMUM_MEDIA_QUERY} {
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
  }

  ${({ buttonStyle }): SerializedStyles => setColors(buttonStyle)}
`

const ButtonIcon = styled.div<ButtonIconProps>`
  display: flex;
  ${({ placement }): SerializedStyles => setIconMargins(placement)}
  svg {
    color: ${({ iconColour }) => iconColour};
  }
`

const ButtonText = styled.div``

const Button: FC<Props> = ({
  type,
  value,
  buttonStyle = 'primary',
  disabled = false,
  icon,
  iconPlacement = 'left',
  iconColour = 'white',
  ...rest
}) => (
  <StyledButton type={type} buttonStyle={buttonStyle} disabled={disabled} {...rest}>
    {icon && iconPlacement === 'left' && (
      <ButtonIcon placement={iconPlacement} iconColour={iconColour}>
        {icon}
      </ButtonIcon>
    )}
    {value && <ButtonText>{value}</ButtonText>}
    {icon && iconPlacement === 'right' && (
      <ButtonIcon placement={iconPlacement} iconColour={iconColour}>
        {icon}
      </ButtonIcon>
    )}
    {!value && icon && iconPlacement === 'center' && (
      <ButtonIcon placement={iconPlacement} iconColour={iconColour}>
        {icon}
      </ButtonIcon>
    )}
  </StyledButton>
)

type ButtonStyle = 'primary' | 'standard' | 'workflow' | 'danger' | 'clear'
type ButtonTypes = 'button' | 'submit' | 'reset'
type IconPlacement = 'left' | 'right' | 'center'

interface Props extends ButtonProps {
  buttonStyle?: ButtonStyle
}

interface StyledProps {
  buttonStyle: ButtonStyle
}

interface ButtonIconProps {
  placement: IconPlacement
  iconColour: string
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: ButtonTypes
  value?: string
  disabled?: boolean
  icon?: ReactNode
  iconPlacement?: IconPlacement
  iconColour?: string
}

export default Button
