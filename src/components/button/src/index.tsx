import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { BUTTON_BLUE, BUTTON_GREEN } from '../../../constants/colours'

const Button = styled.button<ButtonType>`
  background: transparent;
  box-shadow: none;
  color: ${BUTTON_BLUE};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2;
  margin: 2px 2px;
  padding: 1px 7px;
  text-decoration: none;
  user-select: none;
  width: 100%;

  &:hover {
    background: #e5e5e5;
  }

  ${props =>
    props.primary &&
    css`
      background: ${BUTTON_BLUE};
      color: white;

      &:hover {
        background: #005bb7;
      }
    `}

  ${props =>
    props.workflow &&
    css`
      background: ${BUTTON_GREEN};
      color: white;

      &:hover: {
        background: #00604b;
      }
    `}
`

interface ButtonType {
  primary?: boolean | undefined
  workflow?: boolean | undefined
}

export default Button
