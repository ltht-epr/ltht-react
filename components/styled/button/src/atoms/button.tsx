import { FC, ReactNode, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/react'
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
  font-size: 1rem;
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

  ${DESKTOP_MEDIA_QUERY} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
  }

  ${({ buttonStyle }): SerializedStyles => setColors(buttonStyle)}
`

const ButtonIcon = styled.div<ButtonIconProps>`
  display: flex;
  margin: ${({ placement }) => (placement === 'left' ? '0 0.75rem 0 0' : '0 0 0 0.75rem')};

  svg {
    color: white;
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
  ...rest
}) => (
  <StyledButton type={type} buttonStyle={buttonStyle} disabled={disabled} {...rest}>
    {icon && iconPlacement === 'left' && <ButtonIcon placement={iconPlacement}>{icon}</ButtonIcon>}
    <ButtonText>{value}</ButtonText>
    {icon && iconPlacement === 'right' && <ButtonIcon placement={iconPlacement}>{icon}</ButtonIcon>}
  </StyledButton>
)

type ButtonStyle = 'primary' | 'standard' | 'workflow' | 'danger'
type ButtonTypes = 'button' | 'submit' | 'reset'

interface Props extends ButtonProps {
  buttonStyle?: ButtonStyle
}

interface StyledProps {
  buttonStyle: ButtonStyle
}

interface ButtonIconProps {
  placement: 'left' | 'right'
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: ButtonTypes
  value: string
  disabled?: boolean
  icon?: ReactNode
  iconPlacement?: 'left' | 'right'
}

export default Button
